const { title } = require("process");
let container = document.getElementById('container')
let url= 'http://localhost:3000/api/todo';

let getData =async ()=>{
    let res  = await fetch(url);
    res = await res.json()
    console.log(res);
    renderDom(res)

}
getData();
let card = (t,s,id)=>{
    let div = document.createElement('div');
    let h3 = document.createElement('h3');
    let p = document.createElement('p');
    let ID = document.createElement('p');
    h3.innerText = t;
    ID.innerText = id;
    
    p.innerText = s
    div.append(h3,p,ID)
    return div
}


let renderDom  = (data)=>{
    data.forEach(({title:name,status,id}) => {
        console.log(name);
        let todo = card(title,status,id)
        container.append(todo);
    });
}
