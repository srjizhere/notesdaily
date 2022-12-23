const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: String,
    age:Number,
    legal: Boolean,
    city:String,
    langauge:String,
    profession:String,
});
const UserModel = mongoose.model("user",userSchema);

module.exports={UserModel}