const jwt  = require("jsonwebtoken")

const authenticate  = (req,res,next)=>{
    const token = req.headers?.authorization?.split(" ")[1];
    if(token){
        const decoded =jwt.verify(token,"kush");
        if(decoded){
            console.log(decoded);
            const userID = decoded.userID;
            req.body.userID = userID
            next()
        }else{
            res.send("something went worng please login")
        }
    }else{
        res.send({"msg":"please login"})
    }
}


module.exports = {authenticate}