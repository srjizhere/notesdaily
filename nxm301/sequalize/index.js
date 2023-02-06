const express= require('express');
const {Sequelize,DataTypes} = require('sequelize');
 
const app = express();

app.use(express.json())
//pass the configuration to db
const sequelize = new Sequelize('classroom','root','',{
    host:'localhost',
    dialect:'mysql'
})
//authentications to connect to db
sequelize.authenticate().then(()=>{
    console.log('successfull connection to db');
}).catch((e)=>{
    console.log('failed to connect ot DB');
    console.log(e);
})

//create a schema/model/table

const Car  = sequelize.define('car',{
    id:{
        type:DataTypes.SMALLINT,
        primaryKey:true,
        autoIncrement:true
    },
    name:{

        type:DataTypes.STRING,
        allowNull:false
    },
    brand:{
        type:DataTypes.STRING,
        allowNull:false
    }

})


// Sync with DB
sequelize.sync().then(()=>{
    console.log("syncing is completed");
}).catch(e=>{
    console.log("error occur read it");
    console.log(e);
})



// insert type of query
// Car.create({
//     name:"Ertica",
//     brand:"Maruti"
// }).then(()=>{
//     console.log("record created Sucessfull");
// }).catch((e)=>{
//     console.log(e);
// })



app.post('/car',(req,res)=>{
    const carData = req.body;
Car.create(carData).then(()=>{
    console.log("record created Sucessfull");
    return res.send("car Created sucessfully")
}).catch((e)=>{
    console.log(e);
    throw new Error('something went wrong')
})
})
app.get('/cars',(req,res)=>{
    Car.findAll().then((cars)=>{
        res.send(cars)
      }).catch((e)=>{
    console.log(e);
    throw new Error('something went wrong')
})
})
app.get('/car',(req,res)=>{
    Car.findOne({
      where:{
        id:1
      }
    }).then((cars)=>{
        res.send(cars)
      }).catch((e)=>{
    console.log(e);
    throw new Error('something went wrong')
})
})
















app.listen(8000,()=>{
    console.log('server started on 8000');
})