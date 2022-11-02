//three ways to create object in JS
//1. let obj{} obj literal
//2.



//vechical Parking System

//create a vechical class with  follow prop
//1.type
//2.regno
class vechical{
    constructor(t,r){
        this.type=t
        this.regno=r
    }

}
class Car extends vechical{    //first veci
    constructor(regno){

        super('car',regno)
    }
}
class bike extends vechical{
    constructor(regno){
        super('bike',regno)
    }
}
class truck extends vechical{
    constructor(regno){
        super('truck',regno)
    }
}



class slots{
    constructor(number,type){
        this.number=number;
        this.type=type;
        this.isBooked-false;
    }
}
class ParkingFloor{
    constructor(maxslots){
        this.parkingspot= [];

        for(let i=0;i<maxslots;i++){
            if(i===0){
                this.parkingspot.push(new slots(i,"bike"))
            }
            else if(i===1){
                this.parkingspot.push(new slots(i,"car"))
            }
            else{
                this.parkingspot.push(new slots(i,"truck"))

            }
        }

        
    }
}



class mall{

constructor(numberoffloors){

    this.floors=[];
    // this.numberoffloors=numberoffloors
    for(let i=0;i<numberoffloors;i++){

        this.floors.push(new ParkingFloor(i,numberoffloors))
    }
}
}
let m1= new mall(3)
console.log(m1);
//store multiple data in arrau



let t1= new truck('gj245324');
let b1= new bike('mh1934534534');
let c1= new Car('kp345342');
// console.log(c1);
// let Ps=new ParkingFloor(3)
// console.log(Ps);

// let v1= new vechical("car","mh19232432")
// console.log(v1);

