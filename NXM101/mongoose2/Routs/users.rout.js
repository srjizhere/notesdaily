

const {Router} = require("express");


const {UserModel} = require("../model/user.model")
const userRouter = Router();

userRouter.get("/",async(req,res)=>{
    const params= req.query
    try{
        const users =await UserModel.find(params)
        res.send(users)
    }catch(err){
        console.log(err);
        res.send("someting went wrong")
    }
})

userRouter.post("/createuser",async(req,res)=>{
    const payload = req.body;
    try{
        await UserModel.insertMany([payload])
        res.send("created sucessfully");
    }catch(err){
        console.log(err);
        res.send("something again went wrong")
    } 
});


userRouter.delete("/deleteuser/:userID",async(req,res)=>{
    const userID = req.params.userID
    try{

        await UserModel.findByIdAndDelete({_id:userID})
        console.log("userID deleted succesfully");
        res.send("deleted sucessfully")


    }catch(err){
        console.log(err);
        res.status(500).send("err something went wrong")

    }
})
userRouter.post("/india",async(req,res)=>{
    try{
        await UserModel.updateMany({}, { $set: { profession: 'developer' } });
        res.send("done")

    }catch(err){
        console.log("something went wrong");

        console.log(err);
    }
})



module.exports = {userRouter}