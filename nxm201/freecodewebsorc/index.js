const http = require('http');
const Websocketserver = require("websocket").server

const httpserver = http.createServer((req,res)=>{
console.log("we have received a request");
});
let connection = null;



const websocket = new Websocketserver({
    "httpServer": httpserver
});
websocket.on("request",request=>{
    connection = request.accept(null,request.origin);
    connection.on("onopen", e=>{
        console.log("open!!");
    });
    connection.on("onclose", e=>{
        console.log("close!!");
    });
    connection.on("onmessage",message=>{
        console.log(`recieved message ${message}`);
    });
});




httpserver.listen(8080,()=>{
    console.log("my server is listening on 8080")
});