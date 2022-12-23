const mongoose = require('mongoose');

//1. to connect to DB;

const main = async() => {
    try{
    const connection = await mongoose.connect("mongodb://127.0.0.1:27017/firstdb");
    console.log("connected correctly");
    // await Studentmodel.insertMany([{name:"wange",age:23,city:"Pune"}]);
    // const student = new Studentmodel({
    //     name:"fakira",
    //     age: 3,
    //     city:"banglore",
    // });
    // await student.save()
    console.log("Data added");


    const students = await Studentmodel.find({city:"Pune"});
    console.log(students);
    await connection.disconnect()
    console.log("connection ij closed");
    }catch(err){
        console.log(err);
        console.log("error occur in main funcion");
    }
};

main();

//2. defining structure of our document
const studentSchema= mongoose.Schema({
    name: String,
    age: Number,
    city: String,
  
},{
    versionKey:false
});

const Studentmodel = mongoose.model("student",studentSchema);

//db name -firstdb
//collectionname- students
//convention -> to give the collection name in singular and it will convert to plural

