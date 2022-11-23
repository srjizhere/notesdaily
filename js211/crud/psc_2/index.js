import { Navbar } from "./component/navbar.js";
document.getElementById("navbar").innerHTML = Navbar();
let url  = "";
let addProduct = async () =>{
  let res =   await fetch(url);


  res = res.json()
  console.log(res);
  makecard(res)



  
}
let cont = document.getElementById("container")
let makecard = (res) =>{

    let div =  document.createElement("div");
    let img = document.createElement("img");
    let price = document.createElement("h2");
    


    





}