// Promise 

// 1. what is promise
// 2. What are the states of a promise
// ---->anything that takes time, which might be fullfilled, rejected , can be pending

//fetch/api is a promise
//3. How to create a promise 
/*
let p = new Promise((resolve, reject)=>{
    // resolve('resolved')         //this resolve promise
    resolve('resolve')
});
// console.log(p);


//4. How to handle a promise 
//1. .then & .catch .finally

p.then((res)=>{
    console.log(res);    ///resolved
}).catch((error)=>{
    console.log(error);         //rejected
}).finally(()=>{
    console.log('Hello from finally block');   // always with you
});


*/

// sleep(300)
// .then((res)=> console.log(res))
// .catch((err)=>console.log(err));
// //1. Create the function sleep
// //2. Reject the promise if the param is not a number
// //3.Resolve the promise after delay
// function sleep(delay){
    //     return new Promise((res,rej)=>{
//             if(typeof delay!=="number"){
//                 rej('Rejected')
//             }
//             else{
//                 setTimeout(()=>{
    //                     res('resolved')
    //                 },delay)
    //             }
//     })

// }


// let fun = async()=>{
    //     try{
//         let res = await sleep(3000);
//         console.log(res);

//     }catch(err){
//         console.log(err);

//     }finally{
    //         console.log("hellow from finally ");
//     }
// }
// fun();

// 5. Mimic the Tatkal ticket booking

let seat = 100;

let waiting = 101;     //waiting 1

let id = setInterval(() => {
    waiting--;
    console.log(waiting);
}, 3000);

setTimeout(()=>{
clearInterval(id)
console.log("booking clojed");

},10000)

// 101th , 102th, 103th

//when there position reaches <=seat;

let submit = () =>{
    let name =  document.getElementById('name').value;
    waiting++;
    let p = new Promise((res,rej)=>{
        setInterval(()=>{
            if(waiting<=seat){
                res("confirmed")
            }

        },1000)
    })
    p.then((res)=>{
        alert(`${name}, Your ticket is ${res}!`)
        name.value = null
    })
};
//Understand the Requirment 
//destination 














