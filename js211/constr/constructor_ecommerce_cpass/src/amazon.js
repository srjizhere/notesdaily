function Listing(name,category,image,price,sold) {
this.name = name,
this.category = category,
this.image = image,
this.price = price,
this.sold = sold || false

}

function getFormData() {
  // let user = new Listing(data)
  
  let name =document.getElementById('name').value;
  let category = document.getElementById('category').value;  
  let image = document.getElementById('image').value;  
  let price = document.getElementById('price').value;
  addListing(name, category, image, price)
}

function addListing(input, category, image, price, gender) {
  let data = JSON.parse(localStorage.getItem("products")) || [];
  let user = new Listing(input,category,image,price);
  data.push(user);
  localStorage.setItem("products",JSON.stringify(data));
  
  
  
}

window.onload = function () {
  //  get the form here and add submit event and handle the preventDefault
  document.getElementById('form').addEventListener('submit',function(e){
    getFormData()
    e.preventDefault()
  })
};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    Listing,
    addListing,
  };
}
