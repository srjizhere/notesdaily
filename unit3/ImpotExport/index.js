//lets say hotstar website have 30 pages 
//same code 30 times (100 lines of each)
//update hotstar logo manually 30 times.
//Import- Export
//1.  syntax 
//2. address
import navbar from './navbar.js'
console.log(navbar);

let nav_bardiv= document.getElementById('navbar');

nav_bardiv.innerHTML = navbar();   //execute the function so that can return

