const fs = require('fs');
// fs.readFile("./somefile.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log("error readthe file");
//         console.log(err);
//     }
//     console.log(data)

// })
// //ASCI code in hexadecimal format
// let data = fs.readFileSync("./lecture.txt",{encoding:"utf-8"});
// console.log(data);
// console.log("bye");
fs.writeFileSync("./syctext.txt","calm down this is sync write",{encoding:"utf-8"})
fs.writeFile("./text.txt","calm ogi so bogi to dogi",{encoding:"utf-8"},(err)=>{
    if(err){
    console.log("error occur in the actul file");
    console.log(err)
    }
    console.log("Go and check file");
});
fs.appendFile("./text.txt","calm ogi so bogi to dogi",{encoding:"utf-8"},(err)=>{
    if(err){
    console.log("error occur in the actul file");
    console.log(err)
    }
    console.log("Go and check file");
});
