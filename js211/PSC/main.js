// 1. revising the concepts 
// a LocalStorage + setTimeout/setInterval
// b. Constructor function + prototype
// c. Promises


// 1. Alarm Clock
// 2. Vaccination System(promises);

// let data =    JSON.parse(localStorage.getItem('products')) || [];

// //3. push the product tp data array
// // 4. set 
// localStorage.setItem("products",JSON.stringify(data))

// // delete a product 

//1. get the data from the localStorage
// 2. use slice/ splice // filter
// ape
// 3. set the data
// 1. Alarm Clock
// 2. Vaccination System(promises);

// alram clock 
// time from user
// store your time somewhere
// 3:50 PM (SELETED)
// 3:44 PM (Current)
// setInterval()

let setAlarm = ()=>{
    let time  = document.getElementById("time").value;
    let [setHours,setMins] = time.split(":");
    console.log(time);
    console.log(setHours,setMins);
    console.log(new Date());
    
    // console.log(hours);
    // console.log(min);
    
    setInterval(()=>{
        let Current_time = new Date();
        // let hours = Current_time.getHours();
        // let min  = Current_time.getMinutes();'
        console.log(Current_time);
        if(setHours ===Current_time.getHours() && setMins ===Current_time.getMinutes()){
        alert("Ting tring")
    }
},1000);
};
 








