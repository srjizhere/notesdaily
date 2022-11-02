//1. API   // application programming inteface
//2. Fetch
//3. Promise.all
//4. Debouncing(closures)

//Web API-> Application Programming Interface


let url="https://jsonmock.hackerrank.com/api/articles"
// fetch(url).then((res)=>{
// return (res.json());
// }).then((res)=>{

//     console.log(res);
// }).catch((e)=>{
// console.log(e);
// })

//  let appenddata = (data) =>{
//      data.forEach(e => {
//          let div = document.createElement("div")
//          let cont = document.getElementById("container")
//         // document.getElementById("container");
//         let image = document.createElement("img");
//         image.src =e.url
//         let title = document.createElement("h3");
//         title.innerText=e.title
//         div.append(image,title);
//         cont.append(div)
        
//     });
//  }
//Async Await
// let getData =async()=>{
//     try{
//     let res = await fetch(url)
//     res = await res.json();
//     console.log(res);
//     // appenddata(res.data)
//     }catch(error){
//         console.log(error);
//     }
// }
// getData()



//Get all data in single array;
// let getData =async()=>{
//     let result = []
//     try{
//         for(let i=1;i<=5;i++){
//     let res = await fetch(`${url}?page=${i}`)
//     res = await res.json();
//     result.push(res)
    
//   }
//     console.log(result);
//     // appenddata(res.data)
//     }catch(error){
//         console.log(error);
//     }
// };
// getData()


let arrOffetch = [];
for(let i =1;i<6;i++){
    let f= fetch(`${url}?page=${i}`).then((res)=>{
               return res.json();
            });
     arrOffetch.push(f)
}


// let arrOffetch =[

//     fetch(`${url}?page=1`).then((res)=>{
//        return res.json();
//     }),

//     fetch(`${url}?page=2`).then((res)=>{
//        return res.json();
//     }),

//     fetch(`${url}?page=3`).then((res)=>{
//        return res.json();
//     }),
    
// ];


//1000 pages
let getData =async()=>{
    let result =[];
    try{
        let res = await Promise.all(arrOffetch);
        for(let data of res){  //for of loop
            result.push(...data.data)

        }
        
        console.log(result);
    }catch(error){
        console.log(error);
    }
};
getData()