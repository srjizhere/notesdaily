const express = require('express');

const studentRouter = express.Router();

studentRouter.get("/",(req,res)=>{
    res.send("all students")
})
studentRouter.get("/web20",(req,res)=>{
    res.send("all web20 -students")
});

module.exports = {studentRouter}