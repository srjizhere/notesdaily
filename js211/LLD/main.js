// class Rectangle{

//     constructor(l,b){
//         this.length = l;
//         this.breadth = b;
//     }

//     area(){
//         console.log(this.length * this.breadth);
//     }

// }

// let r = new Rectangle(12,13);
// console.log(r);

// let obj  = {
//     A:1,b:2
// }
// console.log(obj);

//inheritance using class

// class Car{
//     constructor(brand,name){
//         this.brand = brand;
//         this.name = name;
//         this.break = "abs";
//     }
// }

// class SUV extends Car{
//     constructor(price,color,brand,name){
//         super(brand,name);
//         this.price = price;
//         this.color = color;
//     }
// }

// let s = new SUV(23,"red","TATA","safari");
// console.log(s);

// //1. Encapsulation

// class User{
//     #name;
//     #score;
//     constructor(name,score){
//         this.#name = name;
//         this.#score = score;
//     }
//     get marks(){
//         return this.#score
//     }
//     get nam(){
//         return this.#name;
//     }

//     // set marks(value){
//     //     this.#score = value;
//     // }
// }

// let u = new User("charchit",9);
// console.log(u.score);
// console.log(u);
// console.log(u.marks);

// u.marks = 10;
// console.log(u.marks);

//Abstraction


class User{
    constructor(){
        if(this.constructor ===User){  //It becomes Abstract class
            throw new Error(`Istance of abstract class`)
        
        }
    }
    
    run(){
        console.log("running");
    }
}

// let a   = new User();
// console.log(a);

//if we dont want to let user to create object out of it.

class Admin extends User{

}
let a  = new Admin();
a.run();


//4. Polymorphysm POLY
class Car{
    constructor(brand,name){
        this.brand = brand;
        this.name = name;
        this.break = "abs";
    }
    run(){
        console.log("100km/hr");
    }
}

class SUV extends Car{
    constructor(price,color,brand,name){
        super(brand,name);
        this.price = price;
        this.color = color;
    }
    run(){
        console.log("300km/hr");
    }
}
class Sedan extends SUV{
    constructor(){
        super(price,color,brand,name)
    }

    run(){
        console.log("400km/hr");
    }

}

let s = new Sedan(23,"red","tata","safari")

s.run();