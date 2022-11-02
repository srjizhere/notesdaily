// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import {navbar} from "../components/navbar.js"
let navbar_div= document.getElementById("navbar");
navbar_div.innerHTML=navbar();

import {sidebar} from "../components/sidebar.js"
let sidebar_div= document.getElementById("sidebar");
sidebar_div.innerHTML=sidebar();


const apddef=document.getElementById("results");

const displaydefault= async ()  =>{
    try{


    const query=document.getElementById("search_input").value
    
   const res= await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)

        const data= await res.json();
        const actualdata=data.articles;
        console.log(actualdata);
        
        
        // console.log(data);
        // console.log(actualdata);
        appendnews(actualdata)
    } catch (error){
        console.log(error);
    }

    //query
    //what does url need?
    //fetch need url



}
displaydefault()
const appendnews=(data)=>{
    apddef.innerHTML=null;
    //nature of data ? it is array of obj

    data.forEach(({urlToImage,title,description}) => {
        let i=0;
    //destucturing
        // console.log(el);
        //data req
        //1. thumbnail
        //2. video ID
        //3. title
        //4.channel name
        // const title=snippet.title;
        const imgg=urlToImage;

        const thumb=title;
        const descript=description;

        const div=document.createElement(`div`);
        div.className="news"


        const img=document.createElement(`img`)
        img.src=imgg;

        const title_h4=document.createElement(`h4`);
        title_h4.innerText=thumb;
        const des_h5=document.createElement(`h5`);
        des_h5.innerText=descript;
        div.append(img,title_h4,des_h5)

        div.onclick=()=>{
            //now what do you want to happen when div is clicked
            //transfer video details from index.js to video.js
            storeclcvid(data[i]);
            console.log('clicked');
            window.location.href="./news.html"
        }
        
        

        apddef.append(div);
        i++;
    });


}
function storeclcvid(data){

    localStorage.setItem('news',JSON.stringify(data));
}


