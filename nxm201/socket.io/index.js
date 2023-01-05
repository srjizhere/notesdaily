const express = require('express')
const {Server} = require('socket.io');
const http = require('http');


const app = express();
// app.listen(8080)
//what you can do is use express inside http as callback 

const http_server = http.createServer(app);
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

http_server.listen(8080,()=>{
    console.log("server runnning on 8080");
})

//web socket server which takes our normal server as an argument
const io = new Server(http_server);

let user_count = 0;
let messages = [];
io.on("connection",(socket)=>{
   user_count++;
    console.log("online  = "+user_count);
    console.log("client connected");
    socket.on("msg", (sandesh)=>{
        console.log(sandesh);
        socket.emit("xyz","Hellow from server");
    })
    socket.broadcast.emit("usercount",user_count)
    
    socket.emit("allmsg",messages)
    
    
    
    
    socket.on("disconnect",()=>{
        console.log("client disconnected");
        user_count--;
        socket.broadcast.emit("usercount",user_count)
    })
})
