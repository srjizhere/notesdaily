//sflQaDXwqxewj5yMSaoHRlzeah9Bzyyi
//https://api.giphy.com/v1/gifs/trending?api_key=sflQaDXwqxewj5yMSaoHRlzeah9Bzyyi&limit=25&rating=g
let APIKEY="sflQaDXwqxewj5yMSaoHRlzeah9Bzyyi"


const main =  async()=>{

    try{
    let response  = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${APIKEY}&limit=25&rating=g
    `);
    let data = await response.json();
    append(data.data)
    console.log(data.data);

    }
    catch(e){
        console.log(e);
    }


}
main();
const append = async (data)=>{
data.forEach(e => {
    let gif=document.getElementById('gif')
    let img = document.createElement('img');
    img.src=e.images.downsized.url
    // console.log(img);
    img.addEventListener('click',()=>{detals_gif(e.id)})
    gif.append(img)
});
}

const detals_gif = (id)=>{

    localStorage.setItem("details",JSON.stringify(id));
    window.location.href="gifdetail.html";


}

const random= async ()=>{
    let gif=document.getElementById('gif');
    gif.innerHTML=null;
    try{

    let res= await  fetch(`https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&tag=&rating=g `);
    let data = await res.json();
    console.log(data);

    let img= document.createElement('img');
    img.src = data.data.images.downsized.url;
    img.addEventListener('click',()=>{
        detals_gif(data.data.id)
    })
    console.log(data.data.images.downsized.url);
    gif.append(img);

    } catch(e){
        console.log(e);
    }

}

const catagories= async ()=>{

    let gif=document.getElementById('gif');
    gif.innerHTML=null;
    let sorting= document.getElementById("sorting");
    sorting.innerHTML=null;

    try{
    let res = await fetch(`https://api.giphy.com/v1/gifs/categories?api_key=${APIKEY}`)
    let results = await res.json();
    console.log(results.data);
        let dum=true;
        
    let sortinga=document.createElement('button');
         sortinga.innerText="A TO Z";
        sorting.append(sortinga)
        let sortingz=document.createElement('button');
        sortingz.innerText="Z TO A";
        sorting.append(sortingz)
        sortingz,onclick= ()=>{
            sorting_cata(dum);
        }





        localStorage.setItem("catagories",JSON.stringify(results.data))

        results.data.forEach(e => {
            let name= document.createElement('p');
            name.innerHTML=e.name
            console.log(name);
            let image=document.createElement('img');
            image.src= e.gif.images.downsized.url;
            image.addEventListener("click",()=>{
                detals_gif(e.gif.id)
            })
            gif.append(name,image)

        });

    }
    catch(e){console.log(e); }

}
const sorting_cata =(dum)=>{
    let data = JSON.parse(localStorage.getItem("catagories"))
    if(dum==true){
    data = data.reverse();
    }
    let gif =document.getElementById('gif');
    gif.innerHTML=null;
    data.forEach(e => {
        let name= document.createElement('p');
        name.innerHTML=e.name
        console.log(name);
        let image=document.createElement('img');
        image.src= e.gif.images.downsized.url;
        image.addEventListener("click",()=>{
            detals_gif(e.gif.id)
        })
        gif.append(name,image)
        
    });

}


const gif =  async()=>{
    try{
        let gif=document.getElementById("gif");
        gif.innerHTML=null;
    let query= document.getElementById("search").value
    if(query==""){
        alert("please provide your input");
    }
    let res= await fetch(`https://api.giphy.com/v1/gifs/search?api_key=sflQaDXwqxewj5yMSaoHRlzeah9Bzyyi&q=${query}&limit=25&offset=0&rating=g&lang=en

    `)
    let data = await res.json();
    console.log(data);
    data.data.forEach(e => {
        let name= document.createElement('p');
        name.innerHTML=e.title
        console.log(name);
        let image=document.createElement('img');
        image.src= e.images.downsized.url;
        image.addEventListener("click",()=>{
            detals_gif(e.gif.id)
        })
        gif.append(name,image)

    });




}catch(e){
    console.log(e);
}
}

