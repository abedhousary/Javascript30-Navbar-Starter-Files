let links = document.querySelectorAll(".links");
let submenu = document.querySelector(".sub-menu");
links[0].addEventListener("click",function(){
    submenu.classList.toggle("show")
})
