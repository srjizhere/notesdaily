

// let count=document.getElementById("item_count").innerHTML;
let cartarr=JSON.parse(localStorage.getItem("items"))  || []
let count=0 



document.getElementById("item_count").innerHTML=count;
let arr;

async  function myfunction(){



    //try is .....
    try{
        let res=await fetch("https://grocery-mock-api.herokuapp.com/items")
        res=await res.json()

        arr=res.data
        console.log(arr)
        appendData(arr)
    }
//do now
    catch(err){
        console.log(err)
    }
}
    myfunction();
// calling right now 

    function appendData(arr){
        document.querySelector("#items").innerHTML=null
        arr.forEach(function(ele,index){
            let div=document.createElement("div")
            let image=document.createElement("img")
            image.src=ele.image

            let name=document.createElement("p")
            name.innerText=ele.name;

            let price=document.createElement("p")
            price.innerText=ele.price;

            let btn=document.createElement("button")
            btn.setAttribute("id","add_to_cart");
            btn.innerText="Add to cart";

            btn.addEventListener("click",function(){
                additems(ele,index)
            })

            div.append(image,name,price,btn)
            document.querySelector("#items").append(div)
        })
    }

    function additems(ele,index){
        cartarr.push(ele)
        count++;

        document.getElementById("item_count").innerHTML=count;
        
        localStorage.setItem("items",JSON.stringify(cartarr));
    }
//rull for each