// 1. Local storage
//A. Choosing the Data Stucture


// there is only one user

/*
let user = {
    name :"hemant",
    batch: "js211",
}

 
// there are multipule user



*/
/*
let user = {
    name :"hemant",
    batch: "js211",
}

user :u 




*/




let submit=()=>{
   let name= document.getElementById("name").value;
  let brand=  document.getElementById("brand").value;
   let price= document.getElementById("price").value;
    let product={
        name,
        brand,
        price,
    };

    //array of objects
    //step 1. get data from LS
    let data =JSON.parse(localStorage.getItem("products")) || [];
    
    //step2. push the new data to the data array;
    
    data.push(product)

    //setp3. set the data to the LS
    localStorage.setItem("products",JSON.stringify(data));
        document.getElementById("name").value=null;;
     document.getElementById("brand").value=null;;
      document.getElementById("price").value=null;;
    // console.log(data);
}





