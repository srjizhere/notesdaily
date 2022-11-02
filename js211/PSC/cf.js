//constructor function can't be created by arrow functions

function Product(name, brand){
    this.name = name;
    this.brand = brand
}
Product.prototype.print=()=>{}
function print(price,rating){
    console.log(this.name);
    console.log(`${this.name} has price ${price} rating ${rating}`);
}
//only once
let p1 = new Product('shoe',"puma");
print.call(p1,1000,4);

print.apply(p1,[4,45])   //here you are calling parameter inside array

let fun = print.bind(p1,12,34)  // bind it now and apply later 
fun()

