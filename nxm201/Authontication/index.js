 const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const cookieParser  = require('cookie-parser')
const fs = require('fs');

 const {connection} = require('./config/db');
 const  {UserModel} = require("./model/User.model")
const {authenticate} = require('./middelware/authenticate');


 const app = express();
 app.use(cookieParser())


app.use(express.json())
 app.get("/",(req,res)=>{
   res.cookie("dummy","ourfirstcookie")
    res.send("API Base URL")
 });
 app.get("/myinfo",(req,res)=>{
   res.send(`your dummy cookie value is ${req.cookies.dummy}`)
 })

 app.post("/signup",(req,res)=>{
   console.log(req.body);
   const  {name,email,password,age,city}  = req.body;
   bcrypt.hash(password,6, async function(err,hash) {
      if(err){
         console.log(err);
         res.send("something went wrong")
      }else{
         const user  = new UserModel({name,email,password:hash,age,city})
         await user.save();
         res.status(201).send({"msg":"signup very sucessfully"})
      }
   })
 });


 app.post("/login",async(req,res)=>{
   const  {email,password}  = req.body;
   const user = await UserModel.findOne({email});
   const hashed_password = user?.password
   if(user.email){
      bcrypt.compare(password,hashed_password,function(err,result){
         if(result){
            const token =  jwt.sign(
               {email, id : user._id},
                process.env.tpsc,
               { expiresIn: 180 }
               )
               const refreshtoken = jwt.sign(
                  {id : user._id},
                  process.env.refreshkey,
                  {expiresIn : 300}
               )
               res.cookie("token", token, {httpOnly:true})

            res.status(200).send({"msg":"login successfull",token,refreshtoken});
         }
         else{
            res.status(401).send({"mgs":"invalid credentials"});
         }
      });
      
   }else{
      res.status(401).send({"mgs":"invalid credentials"})

   }

 });


app.get("/reports",authenticate,(req,res) => {
   res.status(200).send({"msg":"health reports are here"})
});

app.get("logout",(req,res)=>{
   const token = req.headers?.authorization?.split(" ")[1];
   const blacklistfiledata = JSON.parse(fs.readFileSync("./blacklist.json","utf-8"))
   blacklistfiledata.push(token);
   fs.writeFileSync("./blacklist.json",JSON.stringify(blacklistfiledata));
   
   return serialize.send("User logged out sucessfully")
})








app.get("/getrefreshtoken", (req,res)=>{

   const refreshtoken = req.headers?.authorization?.split(" ")[1];

   if(!refreshtoken){
      return res.status(401).send({"msg":"please login again"})
   }

   jwt.verify(refreshtoken,process.env.refreshkey,(err,decoded)=>{
      if(err){
         return res.status(401).send({"mgs":"plesase login again"})
      }else{
         const {email,id} = decoded
         const newToken =jwt.sign(
            {email,id},
             process.env.tpsc,
            { expiresIn: 180 }
            )
            return res.send({"token":newToken})
      }
   })


})































 app.listen(8080,async()=>{
   try{
      await connection
      console.log("connected sucessfully ");
      
   }catch(err){
      console.log("err connecting to db");
      console.log(err);
   }
    console.log("port is running 8080")
 })