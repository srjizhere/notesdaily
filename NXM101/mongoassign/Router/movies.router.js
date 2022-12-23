const {Router} = require('express');
const {MoviesModel} = require("../Model/Movies.model")
const moviesRouter = Router();


moviesRouter.get("/",async(req,res)=>{
    const params = req.query
    try{
        console.log("work");
    const movies = await MoviesModel.find(params);
    res.send(movies);
    }catch(err){
        console.log(err);
        res.send("something gone wrong in find")
    }
})
moviesRouter.post("/addmovie",async(req,res)=>{
    let payload = req.body;
    try{
        await MoviesModel.insertMany([payload]);
        res.send("added sucessfully");

    }catch(err){
        console.log(err);
        res.send("something went wrong while adding")
    }
});
moviesRouter.patch("/update/:movieID",async(req,res)=>{
    const movieID = req.params.movieID
    const payload = req.body;
    try{
     const query=   await MoviesModel.findByIdAndUpdate({_id:movieID},payload);
     console.log(query);
        res.send("updated sucessfully");

    }catch(err){
        console.log(err);
        res.send("something went wrong while updating")
    }
});

module.exports = {moviesRouter}