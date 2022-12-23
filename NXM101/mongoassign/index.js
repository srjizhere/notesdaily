const express = require('express');

const {connection} = require('./config/db');
const {moviesRouter} = require('./Router/movies.router');

require('dotenv').config();
const app = express()
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("this is our base url")
})
app.use("/movies",moviesRouter);













app.listen(process.env.PORT,async()=>{
    try{
        await connection
        console.log("connected successfully");
    }catch(err){
        console.log(err);
        console.log("error in listening");
    } 
    console.log(`port is running on ${process.env.PORT}`);
})




