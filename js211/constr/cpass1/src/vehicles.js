// Function constructor
function FourWheeler(wheels,model, color, speed, fuel) {
    this.wheels  = wheels;
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.fuel = fuel;
}
FourWheeler.prototype.setSpeed = function(speed){
    return this.speed = speed;

}
FourWheeler.prototype.updateColor  = function(color){
    return this.color = color;

}
FourWheeler.prototype.updateFuel  = function(fuel){
    return this.fuel = fuel;

}


// Parent object fro Object.create
let FourWheelerObject = {
    wheels  : 4,
    model : "sedan",
    color : "blue",
    speed : 10,
    fuel  :20,
    setSpeed : function(speed){
        return this.speed = speed;
    
    },
    updateColor  : function(color){
        return this.color = color;
    
    },
    updateFuel  : function(fuel){
        return this.fuel = fuel;
    
    },
    
}

// Store function contructor object here
var car1 = new FourWheeler(4,"nano","red",160,20)


// Store Object.create here
var car2 = Object.create(FourWheelerObject)

export {car1, car2}