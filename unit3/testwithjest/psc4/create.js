import { navbar } from "./components/navbar.js";
let nav_div= document.getElementById("navbar");
nav_div.innerHTML=navbar();
const handleimage = async ()=>{
    try{
    var file = document.getElementById("image");
    let res = await fetch(`https://api.imgbb.com/1/upload?key=1fcee6d5bb2290c06e96305785728322`,{
        method: "POST",
        body: form,
    });
    }catch (e){
        console.log(e);
    }
}