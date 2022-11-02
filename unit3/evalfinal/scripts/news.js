// Ude Import export (MANDATORY)
import {navbar} from "../components/navbar.js"
let navbar_div= document.getElementById("navbar");
navbar_div.innerHTML=navbar();
let apddef=document.getElementById("detailed_news")
 //JSON.parse(localStorage.getItem("name"))
let dataa=JSON.parse(localStorage.getItem("news"))
const appendnews=(data)=>{
    apddef.innerHTML=null;
 
        const imgg=data.urlToImage;

        const thumb=data.title;
        const descript=data.description;

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
     


}
appendnews(dataa);