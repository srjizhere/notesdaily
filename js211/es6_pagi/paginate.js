const url = "https://jsonplaceholder.typicode.com/comments";
let data = []

let getData= async () => {
    let res =await fetch(url);
    res = await res.json();
    return res;

};

let main = async ()=>{
    data = await getData();
    renderDom(1);
    showButton(1);
    console.log(data);
}
main()

let renderDom = ()=> {
    let cont = document.getElementById("container");
    cont.innerHTML =null;
    let start = 10* (page-1);
    let end = start + 10; 
    let per_page_data = data.slice(start,end); //0,9

    per_page_data.forEach(({id,name}) => {
        let p  = document.createElement("p")
        p.innerText =`${id}, ${name}`
        cont.append(p)
    });
}

let showButton = (page) =>{
    let btn = document.getElementById("buttons");
    btn.innerHTML = null;

    let start =1;
    if(page>6){
        start = page -5; //2
    }
    for(let  i =start;i<=start+9;i++){
        let b = document.createElement('button');
        b.innerText = i;
        b.onclick = () =>{
            
        }
        btn.append(b);
    }





}
