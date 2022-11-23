// API url :- http://localhost:3000/api/todo

const url = "http://localhost:3000/api/todo";
let cont = document.getElementById("container");



let getdata = async()=>{
    let res = await fetch(url);   //GET request
    res = await res.json();
    console.log(res);
    renderDom(res)
}

getdata();

let renderDom = (data) =>{
    cont.innerHTML = null;
    data.forEach(({title:name,status,id}) => {
        console.log(name);
        let todo = card(name,status,id)
        cont.append(todo);
        
    });
}
let card = (t,s,id)=>{
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('P');
    let tooglebtn = document.createElement("button");
    tooglebtn.innerText = "toggle";
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    delbtn.onclick = ()=>{
        deltodo(id)
    }
    tooglebtn.onclick = ()=>{
        toggletodo(id)
    }
    p.innerText = t;
    h3.innerText = s;
    div.append(p,h3,tooglebtn,delbtn)
    return div;
}


//CRUD
//Create --> POST
//Read ---> GET   ----Done
//Update --> PUT/PATCH
//Delete --> DELETE

let addtodo = async()=>{
   let t =  document.getElementById("todo").value;
   let todo = {
        title: t,
        id: Date.now() + t,
        status:false
   };

   let res = await fetch(url,{    //where
    method:"POST", //what to do
    body:   JSON.stringify(todo),  //what to go
    headers:{
        "Content-Type":"application/json",
    },
   });
   getdata();
};

 let toggletodo= async(id)=>{
    let todo = await fetch(`${url}/${id}`);
    todo = await todo.json();
    let data = {status:!todo.status}
    let res = await fetch(`${url}/${id}`,{
        method: "PATCH",
        body:JSON.stringify(data),
        headers:{
            "Content-Type":"application/json",
        },
        
    });
    getdata();
    
    
}


let deltodo = async(id)=>{
    
    let todo = await fetch(`${url}/${id}`);
    todo = await todo.json();
    
    let res = await fetch(`${url}/${id}`,{
        method:"DELETE",
        headers:{
            
            "Content-Type":"application/json",
        }

      });


getdata()









}