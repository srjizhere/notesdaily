const jwt = require('jsonwebtoken');
require('dotenv').config();

const authorize = (permitted_role)=>{
    return (req,res,next)=>{
        // const token = req.headers?.authorization?.split(" ")[1];
        // console.log(token);
        // const decoded = jwt.decode(token)
        // role = decoded?.role;
        const role = req.body.user_role;
        if(permitted_role.includes(role)){
            next()
        }else{
           res.status(401).send({"msg":"you are not authorized"})
        }      
    }
}


module.exports = {authorize}

// 1. the users is /reports -->send err.message = jwt expired
// 2. /reports -> refresh token ->check verify -->freshtoken
// 3. /reports ->fresh token -->