class person{
    constructor(name,city){
        this.name = name,
        this.city  = city
    }
    welcome(){
        return " welcome " + this.name +  " from " + this.city
    }
}

let person1 = new person("nurpul","kilibanjaro")
// console.log(person1);
// console.log(person1.welcome());
class rectangle{
    constructor(l,b){
        this.length = l,
        this.breath = b,
        this.area  = (l*b)
    }
    perimeter(){
        return (this.length+ this.breath)*2
    }
    price(){
        return this.area *1200
    }
}
let reactangle = new rectangle(12,23)
console.log(reactangle);
console.log(reactangle.perimeter());
console.log(reactangle.price());

