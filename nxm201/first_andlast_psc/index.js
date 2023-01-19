const express = require('express');
const app = express();

const cors = require('cors');
const http =  require('http');

const {server} = require('socket.io');
const { Socket } = require('engine.io');

const httpserver = http.createServer(app);
app.get("/",(req,res)=>{
    res.send("Welcome")
})
const wss = new Server(httpserver)

wss.on("connection",(Socket)=>{
    console.log("A client was connected");
})
httpserver.listen(8080,()=>{
    console.log("Server is running on port 8080");
})