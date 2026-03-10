const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".residence-card");

buttons.forEach(button => {

button.addEventListener("click", () => {

buttons.forEach(btn => btn.classList.remove("active"));
button.classList.add("active");

const filter = button.dataset.filter;

cards.forEach(card => {

if(filter === "all"){
card.style.display = "block";
}
else{
card.style.display =
card.dataset.category === filter ? "block" : "none";
}

});

});

});



window.addEventListener("scroll",function(){

let header = document.querySelector(".header");

if(window.scrollY > 50){
header.classList.add("scrolled");
}
else{
header.classList.remove("scrolled");
}

});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", function(){

nav.classList.toggle("active");

});
