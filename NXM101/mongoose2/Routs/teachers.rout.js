
const express = require("express");
const {TeacherModel} = require("../model/teacher.model")

const teacherRouter = express.Router();
teacherRouter.get("/",async(req,res)=>{
    const params= req.query
    try{
        const teacher =await TeacherModel.find(params)
        res.send(teacher)
    }catch(err){
        console.log(err);
        res.send("someting went wrong")
    }
})

module.exports = {teacherRouter}
