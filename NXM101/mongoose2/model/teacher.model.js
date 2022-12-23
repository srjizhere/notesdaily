const mongoose = require('mongoose');
const teacherSchema = mongoose.Schema({
    name: String,
    age:Number,
});
const TeacherModel = mongoose.model("teacher",teacherSchema);

module.exports = {TeacherModel}