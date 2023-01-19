const Redis = require('ioredis');

const redis = new Redis({
    port : 13887,
    host :"redis-13887.c241.us-east-1-4.ec2.cloud.redislabs.com",
    username : "default",
    password: "",
    db : 0
});
redis.set("city","bangalore")

redis.get("age",(err,result)=>{
    if(err){
console.log(err);
    }
    console.log(result);
})
redis.get("city",(err,result)=>{
    if(err){
console.log(err);
    }
    console.log(result);
})