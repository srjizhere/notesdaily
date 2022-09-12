let items=JSON.parse(localStorage.getItem("items")) || []

display(items)

function display(items)     //function execute
{
    document.querySelector("#cart") .innerHTML=null;
    items.forEach(function(ele,index){
        let totalprice=ele.price+ele.price;
        document.getElementById("cart_total").innerHTML=totalprice;
        let div=document.createElement("div")
        
        let image=document.createElement("img")
        image.src=ele.image
        
        let name=document.createElement("p")   //creation
        name.innerText=ele.name;
        
        let price=document.createElement("p")
        price.innerText=ele.price

        let btn1=document.createElement("button")
        btn1.setAttribute("class","remove")

        btn1.innerText="remove";

        btn1.addEventListener("click",function(){
            removeitems(ele,index)
        })

        div.append(image,name,price,btn1)

        document.querySelector("#cart").append(div)

    })
}

function removeitems(ele,index){
    items.splice(index,1)

    localStorage.setItem("items",JSON.stringify(items))
     totalprice=document.getElementById("cart_total").innerHTML


     totalprice=ele.price
    display(items)
}
