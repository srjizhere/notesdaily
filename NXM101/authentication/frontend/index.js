let url = "http://localhost:8080/login"
async function  storeit(){
   let name =  document.getElementById("name").value
   let email =  document.getElementById("email").value
   let password=  document.getElementById("password").value
    let age = document.getElementById("age").value
    
let obj = {
    email,
    password
    
}
    try{
        let res = await fetch(url,{
            method:"POST",
            headers:{
                "Content-Type":"application/json"

            },
            body:JSON.stringify(obj)
        });

        console.log(await res.json());


    }catch(err){
        console.log(err);
    }






}