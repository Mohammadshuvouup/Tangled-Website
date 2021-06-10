let menu_toggle = document.querySelector(".burger-menu");
let close_menu = document.querySelector(".close-menu");
let menu_bar = document.querySelector(".navPanelLeft");

menu_toggle.addEventListener("click",function(){

  menu_bar.style.left="0";

})

close_menu.addEventListener("click",function(){

  menu_bar.style.left="-1100px";

})
