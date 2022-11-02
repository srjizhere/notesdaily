    //get Data From LS


    let  Data = JSON.parse(localStorage.getItem("prod"))  ||  [];

    console.log(Data);
    let show_Trouser = (Data)=>{
        let cont= document.getElementById('container');
        Data.forEach(e => {
            let div = document.createElement('div');
            
            let img = document.createElement('img');
            img.src= e.image;
            let nam = document.createElement('h3');
            nam.innerText=e.name;
            div.append(img,nam)
            cont.append(div)
        });
        
    
       
        
    }
    let filter_data = (Data) =>{
            let value = "shirts"
            Data = Data.filter((e)=>{
               return e.catagories=="shirts";
            });
            console.log(Data);
            
            show_Trouser(Data)
            
        };
        filter_data(Data);