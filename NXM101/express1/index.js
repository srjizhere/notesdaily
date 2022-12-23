const { json } = require('express');
const express = require('express');
const fs = require('fs');
const app = express();
//express==> ---method/verb + rout
app.use(express.json())
app.get("/",(req,res)=>{
    res.send("heloowlow");

});
app.post("/addstudents",(req,res)=>{
    fs.writeFileSync("./students.txt",JSON.stringify(req.body),"utf-8");
    res.send("accepted data");
})
app.get("/students",(req,res)=>{
    const data = fs.readFileSync("./db.json","utf-8");
    const parsedData = JSON.parse(data);
    const students = parsedData.students;
    console.log(students);
    res.send(" in progress");
});
app.post("/enterstudents",(req,res)=>{
    console.log(req.body);
    let data = JSON.stringify(req.body);
    let dbdata = fs.readFileSync("./db.json","utf-8");
    dbdata = JSON.parse(dbdata);
    dbdata.students.push(req.body);
    fs.writeFileSync("./db.json",JSON.stringify(dbdata),"utf-8")
    res.send("thanks")
        
})






//crud
app.listen(7000,()=>{
    console.log("listening on PORT 7000");
});