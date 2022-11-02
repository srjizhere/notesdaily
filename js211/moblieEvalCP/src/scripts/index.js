// document.getElementById('submit').addEventListener('click')
function getInputData(event){
  let form = document.getElementById('mobile_form')
  form.addEventListener('submit',function(event){
    event.preventDefault()
    let name = document.getElementById('mobile_name').value
    let brand = document.getElementById('mobile_brand').value
    let price = document.getElementById('mobile_price').value
    let image  = document.getElementById('mobile_image').value
    
    addData(name,brand,price,image)
    name.value=null;
    brand.value =null;
    price.value =null;
    image.value=null;
  })
}



  
 




function addData(name, brand, price, image) {
  let obj = {
    name,
    brand,
    price,
    image
  }

  let data = JSON.parse(localStorage.getItem("mobile_data")) || [];
  data.push(obj)
  localStorage.setItem("mobile_data",JSON.stringify(data))

  
}

// do not change this
if (typeof exports !== "undefined") {
  module.exports = {
    addData,
  };
}
// getInputData()