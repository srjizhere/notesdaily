const mongoose = require('mongoose');

const movieSchema = mongoose.Schema({
    title:String,
    rating:String

});





const MoviesModel = mongoose.model("movie",movieSchema)

module.exports = {MoviesModel}
