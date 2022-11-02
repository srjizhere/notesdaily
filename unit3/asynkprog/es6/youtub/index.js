//1.searchvideo

//ES6->arrowfunction
const API_KEY =`AIzaSyBA6OOcHru4KcSVYcIJ7PkqNCl7zdIFWkA`
const container_div=document.getElementById("container");
const searchvideo = async ()  =>{
    //1.accept query
    //2. url ready?
    //https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]
    try{


    const query=document.getElementById("query").value
    
   const res= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${API_KEY}`)

        const data= await res.json();
        const actualdata=data.items;
        
        // console.log(data);
        // console.log(actualdata);
        appendvideos(actualdata)
    } catch (error){
        console.log(error);
    }

    //query
    //what does url need?
    //fetch need url



}
// AIzaSyBA6OOcHru4KcSVYcIJ7PkqNCl7zdIFWkA   this is my api key
const appendvideos=(data)=>{
    container_div.innerHTML=null;
    //nature of data ? it is array of obj

    data.forEach(({snippet,id}) => {
    //destucturing
        // console.log(el);
        //data req
        //1. thumbnail
        //2. video ID
        //3. title
        //4.channel name
        const title=snippet.title;
        const videoId=id.videoId;

        const thumb=snippet.thumbnails.high.url;
        const channelname=snippet.channelTitle;

        const div=document.createElement(`div`);


        const img=document.createElement(`img`)
        img.src=thumb;

        const title_h4=document.createElement(`h4`);
        title_h4.innerText=title;
        const channel_name_h5=document.createElement(`h5`);
        channel_name_h5.innerText=channelname;
        let data={
            videoId,
            snippet,

        }

        div.onclick=()=>{
            //now what do you want to happen when div is clicked
            //transfer video details from index.js to video.js
            storeclcvid(data);
            console.log('clicked');
        }
        
        
        div.append(img,title_h4,channel_name_h5)

        container_div.append(div);


    });


}

function storeclcvid(data){

    localStorage.setItem('clicked_item',JSON.stringify(data));
}