let store =()=>{
   let image = document.getElementById('imageurl').value;
   let name =  document.getElementById("naam").value;
   let catagories = document.getElementById('catagories').value
   
   let  Data = JSON.parse(localStorage.getItem("prod"))  ||  [];
console.log(Data);
   var prod = {
       image,
       name,
        catagories,
   }
   console.log(prod);
   Data.push(prod)
   localStorage.setItem("prod", JSON.stringify(Data));

   document.getElementById('imageurl').value= null;
   document.getElementById("naam").value = null;
   document.getElementById('catagories').value = "trousers";


}
