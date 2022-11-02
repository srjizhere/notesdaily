//authentication?
//1. localstorage(client side)
//API (masai api mocker)(server side)


//signup (obj) CF--> obj
//today we are going to use new tool instead of CF 
//signup(obj) ES6 Class --> obj

//OOPs

//where should i store the data??
// let user={}
// let user= new User()

class user{
constructor(){

        // this.name=n;     
    }
    #checkusername(username){
        //we dont want username to include '#'
      let value=  username.includes('#') ? false: true
        return value;

    }
    #checkpassword(passowrd){
        //Abstraction
        let value=passowrd.length > 8 ? true :false
        return value

    }
    //user watns to do login and signup
    async signup(n,e,u,p,m,d){

        //what data we need? is on para respectivly

        //pasword length less than<5 
        //we will check username and passowrd is 

       let isvalidated= this.#checkusername(u) && this.#checkpassword(p);









       if(isvalidated){


        this.name = n;
        this.email = e;
        this.username = u;
        this.password =p;
        this.mobile = m;
        this.description = d;
       }
        let actualdata= JSON.stringify(this);
        //send it to server
        try{

       let res=await fetch(`https://masai-api-mocker.herokuapp.com/auth/register`,{
        method:`POST`,
        body: actualdata,
        headers:{
            'Content-Type':'application/json',
        },







       });
        }catch(error){
            console.log(error);
        }
        









    }


    
}
// u1.signup()
//u1.checkepassword()





let u1=new user()
console.log(u1);
function Register(){
    const name=document.getElementById('name').value
    const email=document.getElementById('email').value
    const username=document.getElementById('username').value
    const passowrd=document.getElementById('password').value
    const mobile=document.getElementById('mobile').value
    const description=document.getElementById('description').value

    u1.signup(name,email,username,username,mobile,description)





}