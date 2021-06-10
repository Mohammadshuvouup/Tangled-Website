let nav_down_arrow = document.querySelector(".down-arrow");
let nav_sub_box = document.querySelector(".sub-box");
var is_open = false;

nav_down_arrow.addEventListener("click", function(){

  
  if(is_open == false){
    nav_sub_box.style.display = "block";
    is_open=true;
  }
  else{
    nav_sub_box.style.display = "none";
    is_open=false
  }
 
})