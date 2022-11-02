// this:-- Always refers to parent object

// let obj ={
//     name:"Archit",
//     print: function () {console.log(this);},    //arrow function dont have its own binding

// }
// obj.print();


//constructor function

// CF,Object.create,class, Object literal


// Create a CF of product 
//which will have image, brand , price
// function Product(img,brand,price) {   //you cant make CF by arrow function
//     this.img = img;
//     this.brand = brand;
//     this.price = price;
//   }
// const p1 = new Product("img1", "puma", 50);
// // const p2 = new Product("img2", "rebok", 500);
// // const p3 = new Product("img3", "nike", 300);

//   console.log(p1);


  // second method Object.create 
//   let student = {
//     name:"sai kiran",
//     batch:"js211",
//     institute: 'masai',
//   }

// let s2 = Object.create(student); 
// console.log(s2);
// s2.name="abha"
// console.log(s2);
// // student will be there but it will in the prototype
// let s3=Object.create(s2)
// console.log(s3);
//prototype chain look like this
//s3-----> {}
// protototype---->s2--->{}
                        // prototype------->student




// function Product(img,brand,price) {   //you can't make CF by arrow function
//     this.img = img;
//     this.brand = brand;
//     this.price = price;
//   }
//   Product.prototype.print = function print(){
//         return this.price
//       }
// const p1 = new Product("img1", "puma", 50);
// console.log(p1);
// //   function print(){
// //     console.log(price);
// //   }
// console.log(p1.print()); 

// let arr= new Array(3);
// Array.prototype.printa=function(){
//   console.log("hii from array");
// };
// // // new prototype added ;
// let arr2=[1,2,3];
// arr2.printa();
// console.log(arr);

// let arr2=[1,2,3,4,5];
// //let arr2= new Array(5)phase
let arr =[1,2,3,4,5]
// let filter_arr=arr.filter((el)=>{
//   return el>3
// });
// console.log(filter_arr);
Array.prototype.myfilter=function(cb){
  let result = [];
  for(let i=0;i<this.length;i++){
   if( cb(this[i])){
    result.push(this[i])
   }
  }
  return result;
};
let filter_arr = arr.myfilter((el)=>{
  return el>2
});
console.log(filter_arr);





 