
let id;


function start(){
    let  images= JSON.parse(localStorage.getItem("images"));

    let container=document.getElementById("container");
    container.innerHTML=null;
    
    let i=0;
    //let images(3 SEC)
    //2ND IMAGES(6th second)
    //3rd at 9th sec
    let img=document.createElement("img");
    img.src=images[0]
    container.append(img)
    i++;
   id= setInterval(function(){ 
        if(i==3){
            i=0;
        }
        console.log(images[i]);
        img.src=images[i];
        // container.innerHTML=img;
        container.append(img)
        i++;
    },3);
};
function stop(){
    clearInterval(id)
}
//if you have 3 images 
// img[0]
// after three sec 
//img[1]
// after three sec 
//img[2]
//reset the loop
// img[0]
//0,1,2,0,1,2,0
// dispatchEvent.append(img);