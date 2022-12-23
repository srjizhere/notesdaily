
const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

var cors = require('cors')

const {connection} = require('./config/db');
const {UserModel} = require("./models/user.model")
const {notesRouter} = require("./Routs/notes.routs");
const { authenticate } = require('./middleware/authantication');



const app = express();
app.use(cors())

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Welcome")
})


app.post("/signup",async(req,res)=>{

    const {email,password,name,age}  =  req.body;
    const userpresent = await UserModel.findOne({email});
    if(userpresent){
        res.send("try login user already there")
    }
try{
    bcrypt.hash(password,5, async function(err,hash){
        
        const user   = new UserModel({email,password:hash,name,age});
        await user.save()
        res.send("signup succesfully");

    })



}catch(err){
    res.send("please try again later")
    console.log(err);
}
});

app.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    
    
    try{
        
        const user =await UserModel.find({email});
        
        if(user.length>0){
            const hashed_pass = user[0].password;
        bcrypt.compare(password,hashed_pass,function(err,result){
                if(result){
                    const token = jwt.sign({"userID":user[0]._id},"kush");
                    res.send({"msg":"login sussefull","token":token})
                }else{
                    res.send({"msg":"login failed"})
                }

        });
        }else{
            res.send("login failed")
        } 
    }catch(err){
        console.log(err);
        res.send("something bad omen will happend")
    }
});
app.get("/about",(req,res)=>{
    res.send("About us data")
});
app.use(authenticate)
app.use("/notes",notesRouter)

















app.listen(8080,async()=>{
    try{
        await connection;
        console.log("connected to DB sucessfuly");
    }catch(err){
        console.log("Error in listening");
        console.log(err);
    }
    console.log("listening on porrt 8080");
});