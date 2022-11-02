let data = JSON.parse(localStorage.getItem('mobile_data')) || [];



function append(data) {
document.getElementById('mobile_list').innerHTML =null;
data.forEach((ele,i) => {
  let image = document.createElement('img');
  image.src = ele.image;

  let brand  = document.createElement('h3');
  brand.innerText = ele.brand;
  let name = document.createElement('h3');
  name.innerText = ele.name;
  let price  = document.createElement('h3');
  price.innerText = ele.price;
  
  let button = document.createElement('btn');
  button.innerText = "Remove";
  button.classList.add('remove');
  button.addEventListener('click',function(){
    remove(i)
  })
  let div =   document.createElement('div');
  div.append(image,name,brand,price)


  
  document.getElementById('mobile_list').append(div)
});





}

function remove(index) {
  // logic to remove the mobiles data on selected index
  let data = JSON.parse(localStorage.getItem('mobile_data')) || []
  data.splice(index,1)
  localStorage.setItem("mobile_data",JSON.stringify(data))
  append(data)
}

function sortLowToHigh() {
  // sort the list of mobiles in ascendning order of price
  
}

function sortHighToLow() {
  // sort the list of mobiles in descending order of the price
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    append,
    remove,
    sortLowToHigh,
    sortHighToLow,
  };
}
