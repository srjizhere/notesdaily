
const {WebSocketServer} = require('ws');

const wss = new WebSocketServer({port:8000});


wss.on("connection",(socket)=>{
    socket.send("hellow from server")
    console.log("connection was made");
    socket.on("message",(res)=>{
        console.log(res.toString());
    })
})