```javascript
const header = document.querySelector(".header")

window.addEventListener("scroll",()=>{

if(window.scrollY > 50){

header.classList.add("scrolled")

}
else{

header.classList.remove("scrolled")

}

})
```
// feature property section



document.addEventListener("DOMContentLoaded", function () {

const buttons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".residence-card");

buttons.forEach(button => {

button.addEventListener("click", function () {

buttons.forEach(btn => btn.classList.remove("active"));
this.classList.add("active");

let filter = this.getAttribute("data-filter");

cards.forEach(card => {

let category = card.getAttribute("data-category");

if (filter === "all" || filter === category) {
card.style.display = "block";
} else {
card.style.display = "none";
}

});

});

});

});


function sendDetails(){
alert("Property agent will contact you soon.");
}
