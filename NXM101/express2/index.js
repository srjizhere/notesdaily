const express = require('express');
const cors = require('cors');
const fs = require('fs');

const {studentRouter} = require('./studentRouter/student.Router');


const app = express();


app.use(express.json())
// app.use(cors())  by default we are giving access to everybody

app.use(cors({
    // origin:"*",
    origin:["sfsfsf","loclsfsfsa"],
    methods:"GET"
    
}))

app.use("/students",studentRouter);










app.post("/addstudents",(req,res)=>{
    console.log(req.body)
    res.send("helow")
})
app.get("/lecturer",(req,res)=>{
    res.send("all lectureer")
})

app.post("/addlecture",(req,res)=>{
    console.log(req.body);
    res.send("okay we got your lecture");
});























app.get("/",(req,res)=>{
    console.log("helllwo from rout")
    res.send("Welcome");
})
app.get("/contacts",(req,res)=>{
    console.log("hellow from contacts");
    res.send("contacts");
})
app.get("/about",(req,res)=>{
    console.log("hellwo form about");
    res.send("about");
})
app.get("/blogs",(req,res)=>{
  const data =   fs.readFileSync("./lecture.txt","utf-8");
    res.send(data);
});




app.listen(7640,()=>{
    console.log("port is listening on 7640");
})
















// const timelogger = ((req, res, next)=>{
    //     console.log("timelogger")
    //     const startTime = new Date().getTime();
    //     next()
    //     const endTime = new Date().getTime();
    //     console.log(endTime-startTime)
    
    // })




// const logger = (req,res,next)=>{
//     // console.log("logger")
//     req.body.server = "masai_server"
//     fs.appendFileSync("./logs.txt","\n"+req.url+req.method,"utf-8");
//         next()
// }
// const watchman = (req,res,next)=>{
//     if(req.url==="/about"){
//         next()
//     }else{
//         res.send("please come later under maintance")
//     }

// }