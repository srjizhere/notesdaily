let APIKEY="sflQaDXwqxewj5yMSaoHRlzeah9Bzyyi";

const  details = async()=>{

    try{
    let id= JSON.parse(localStorage.getItem('details'))

    let res=   await fetch(`https://api.giphy.com/v1/gifs/${id}?api_key=${APIKEY}`);


    let data = await res.json();
    console.log(data);
    append(data);
    }catch(e){


        console.log(e);
    }

}

details();
const append = (data)=>{

    let details= document.getElementById("details");

    let img = document.createElement('img')
    img.src=data.data.images.downsized.url;
    let p =document.createElement('p')
    p.innerText=data.data.title

    details.append(img,p);



}

