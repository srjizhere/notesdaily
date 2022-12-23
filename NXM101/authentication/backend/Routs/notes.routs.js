const express = require('express');

const {NoteModel} = require("../models/note.model")
const notesRouter = express.Router();

notesRouter.get("/",async(req,res)=>{
    const notes  = await NoteModel.find()
    res.send(notes)
})


notesRouter.post("/create", async(req,res)=>{
    const payload = req.body
    // get token from header
    //veryfy token from jwt
    try{
        const new_note = new NoteModel(payload);
        await new_note.save()
        res.send({"msg":"note created"})
    }catch(err){
        console.log(err);
        res.send({"msg":"something went wrong"});
    }
 
})


notesRouter.patch("/update/:noteID",async(req,res)=>{
    const noteID = req.params.noteID;
    const userID  = req.body.userID;
           const note  = await NoteModel.findOne({_id:noteID})
            if(userID!=note.userID){
                res.send({"msg":"not authorized"})
            }else{
                const payload = req.body;
                await NoteModel.findByIdAndUpdate({_id:noteID},payload)
                res.send({"msg":"note updated sucessfully"});

            }


  
})


notesRouter.delete("/delete/:noteID",async(req,res)=>{
    const noteID = req.params.noteID;

    await NoteModel.findByIdAndDelete({_id:noteID})
    res.send({"msg":"note deleted sucessfully"});

})



module.exports = {notesRouter};