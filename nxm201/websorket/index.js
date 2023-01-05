const express = require('express');
const {Server} = require("socket.io");
const http = require('http');
const app = express();

// create a normal 
const http_server = http.createServer(app)


app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})

http_server.listen(8000,()=>{
    console.log("listening on port 8000");
});

// web socket server which takes our normal server as an argument
const io = new Server(http_server);

io.on("connection",(Socket)=>{
    console.log("client connected");
    Socket.on("msg",(anything)=>{
        console.log(anything);

        Socket.emit("xyz","helllow from server")
    })
});






















// const {EventEmitter} = require('events');
// const { Socket } = require('dgram');
// // events is the inbuilt module on node 
// const player = new EventEmitter();
// const stadium = new EventEmitter();
// // emit -> emmit 

// player.on("food",()=>{
//     console.log("energy was increased");
// });
// stadium.on("screaming",()=>{
//     console.log("stadium was in panic");
// });
// player.on("injured",(player_name)=>{
//     console.log("energy decrease"+player_name);
//     stadium.emit("stadium was in panic")
// });
// player.on("sleeping",()=>{
//     console.log("energy increasing");
// });
// player.emit("injured", "jhon")
// player.emit("injured","jack")
// // player.emit("sleeping");
// // player.emit("dead")