const jwt = require('jsonwebtoken');
require('dotenv').config();
const fs = require('fs');

const authenticate = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1] || req.cookies?.token
   if(token){
      const blacklistfiledata = fs.readFileSync("./blacklist.json","utf-8");
      if(blacklistfiledata.includes(token)){
         return res.send("please login again")
      }
       jwt.verify(token,process.env.tpsc,function(err,decoded){
         if(err){
            if(err.message==="jwt expired"){
         return res.status(401).send({"msg":"please login","err":err.message});  
            }
            return res.send({"msg":err})
         }else{
            next()
         }
       })

   }else{
      res.status(401).send({"msg":"please login 1"})
   }
}


module.exports = {authenticate}

// 1. the users is /reports -->send err.message = jwt expired
// 2. /reports -> refresh token ->check verify -->freshtoken
// 3. /reports ->fresh token -->