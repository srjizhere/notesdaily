let data=JSON.parse(localStorage.getItem("products")) || [];
let product=({name,brand,price},id) => {                     //this is called destucturing

    let div= document.createElement('div');
    let product_name= document.createElement('h3');
    let product_brand= document.createElement('p');
    let product_price= document.createElement('p');

    let remove_btn = document.createElement('button');
    remove_btn.innerText = "Remove";
    remove_btn.onclick = () =>{
        remove(id);

    }

    product_name.innerText = name;
    product_brand.innerText= brand;
    product_price.innerText=price;
    div.append(product_name,product_brand,product_price,remove_btn)

    return div;
};









let renderDom  =  (data) => {
    let container =document.getElementById('container')
    container.innerHTML= null;
    data.forEach((e,index) => {

        container.append(product(e,index))
    });
};

renderDom(data);



// remove functionality

let remove = (id) => {
    // step1. get the data form LS

    let data =  JSON.parse(localStorage.getItem('products')) || [];
    // remove respected index
        data.splice(id,1);
        // set to localStorage

    localStorage.setItem("products",JSON.stringify(data));

    // renderDOm
    renderDom(data);
}


//sorting 
//filtering
/*
-----> Sorting
1. Get the data from LS
2. Sort the data
3. append/ Display the data
*/
let sortlow =()=>{
    let data = JSON.parse(localStorage.getItem("products")) || [];
    data.sort((a,b)=> a.price -b.price)
    renderDom(data)
}
/* 
----filtering
1. get filter value fom user
1. get the data from LS
2. Filter the data
3. append the data
4. set the data 
*/

let filter = ()=>{
    let data = JSON.parse(localStorage.getItem("products")) || [];
    let value = document.getElementById('filter').value;

    data = data.filter((el)=>{ 
       return el.brand==value
    });
    renderDom(data)
}