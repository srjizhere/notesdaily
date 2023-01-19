const express = require('express');
const { Socket } = require('socket.io');
const app = express();


const server = require("http").createServer(app);

const io  = require("socket.io")(server)

io.on("connection", (Socket)=>{
    console.log("what is socket", Socket);
    console.log("socket is active to be connected");

    Socket.on("chat",(payload)  =>{
        console.log("what is payload",payload);
        io.emit("chat",payload)
    } )
});

server.listen(5000,()=>{
    console.log("Server is listening on 5000...");
})


