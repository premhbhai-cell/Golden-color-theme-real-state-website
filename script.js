
// HEADER SCROLL EFFECT

const header = document.querySelector(".header");

window.addEventListener("scroll", function(){

if(header){
if(window.scrollY > 50){
header.classList.add("scrolled");
}else{
header.classList.remove("scrolled");
}
}

});



// MOBILE MENU TOGGLE

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if(toggle && nav){

toggle.addEventListener("click", function(){

nav.classList.toggle("active");

});

}
