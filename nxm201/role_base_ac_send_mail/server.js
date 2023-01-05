const express = require("express");

const app = express();
require('dotenv').config();

app.get("/",(req,res)=>{
    res.send("base rount")
})












app.listen(8080,()=>{
    console.log("listening on 8080");
})