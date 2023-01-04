const express = require("express");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));


const app = express()
const client_id ="d9442d957b642eb4b427";
const client_secret = "cff9f78085eb8d050676881419c20896c248aa92";

app.get("/",(req,res)=>{
    res.status(200).send("base api")
})

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})


app.get("/auth/github", async(req,res)=>{
    const {code} = req.query;
    console.log("code"+ code);
    const accessToken =await  fetch("https://github.com/login/oauth/access_token",{
        method:"POST",
        headers:{
            "content-type":"application/json",
            Accept : "application/json"

        },
        body: JSON.stringify({
                client_id,
                client_secret,
                code 
         } )

    }).then((res)=>res.json())
    console.log(accessToken);

    res.send("Login sucessfull")
})











app.listen(8080,()=>{
    console.log("listening on port 8080");
})