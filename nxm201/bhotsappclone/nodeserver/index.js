const http = require("http");
const express = require('express');
const io = require("socket.io")(http)
const cors = require('cors');
const port = 8000;

http.createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
      "Access-Control-Max-Age": 2592000, // 30 days
      /** add other headers as per requirement */
    };
    const users = {};
    


io.on("connection",(socket)=>{
    console.log("user");
    socket.on("new-user-joined",(name)=>{
        console.log("new user joined named",name);
        users[socket.id] = name;
        socket.broadcast.emit('user_joined',name)
    })

    socket.on('send',message=>{
        socket.broadcast.emit('receive',{message,name:users[socket.id]})
    })


})

    
  })
