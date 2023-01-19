const express = require('express');
const {transports,format} = require('winston')
const expresswinston  = require('express-winston');
require('winston-mongodb');


const app = express();

app.use(expresswinston.logger({
    transports:[
        new transports.Console({
            json:true,
            colorize : true,
            level:"error"
        }),
        new transports.File({
            level:"warn",
            filename :"warninglogs.log"
        }),
        new transports.MongoDB({
            db:"mongodb://127.0.0.1:27017/logs",
            level:"info"
        })
    ],
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint()
    ),
    statusLevels:true
}))
app.get("/",(req,res)=>{
    res.send("base api")
})
app.get("/update",(req,res)=>{
    res.status(500).send(" serverdowm")
})
app.get("/reports",(req,res)=>{
    const token = req.headers?.token
    if(token!==12345){
        res.status(401).send("Unauthorized")
    }else{
        res.status(200).send("repoerts are")
    }
})



app.listen(8080,()=>{
    console.log("8080 run");
})