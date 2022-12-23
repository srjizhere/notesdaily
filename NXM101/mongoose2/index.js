const express = require('express');

const {connection} = require('./config/db');
const {userRouter} = require('./Routs/users.rout');
const {teacherRouter} = require('./Routs/teachers.rout');


require('dotenv').config()
const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome")
});

app.use("/users",userRouter);
app.use("/teachers",teacherRouter);
















app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("connected to db sucessfully");
        console.log(process.env.name);
    }catch(err){
        console.log(err);
        console.log("error in the connection with db");
    }
    console.log(`listenting on port ${process.env.port}`);
})
