const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name:"String",
    email:"String",
    password:"String",
    age:"Number",
    city:"String",
    role:{type:"String", enum:["customer","seller"],default:"customer" }
})
const UserModel = mongoose.model("user",userSchema)

module.exports = {UserModel}