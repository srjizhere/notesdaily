 const http = require('http');
 const fs = require('fs');

 const server = http.createServer((req,res)=>{

   if(req.url=="/"){
      res.setHeader("Content-tyoe","text/html")
      res.end("<h1>hellowsdfdsfsdfsfsadfsdfsdfsdfa</h1><p>suraj</p><h3>suraj</h3>")
   }
    else if(req.url==="/blogs") {
         res.write("this is my first block")
         res.write("this is my second block")
         res.write("this is my third block")
        res.end("the final work has been done and this is my final tata")
    }
    else if(req.url === "/adddata" && req.method==="POST"){
      let str = "";
      req.on("data",(packet)=>{
        str += packet;
      })
      req.on("end",()=>{
        console.log(str)
      })
      res.end("i got your data and i am very happy")

    }
     else if(req.url=="/movies"){
      let moviesstream = fs.createReadStream("./demolect");
      moviesstream.pipe(res)
    }
    else{
      res.end("nothing found please refer our docunets this is invalid data endpoint")
    }

   
 });


//  server.listen(8000,()=>{
//     console.log("local host on 8000")
//  })