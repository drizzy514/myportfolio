window.addEventListener('DOMContentLoaded', function(){
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0)
})

var burger = document.querySelector(".hamburger");
var nav = document.querySelector(".navigation");

burger.addEventListener("click", function() {
  nav.classList.toggle(`active`);
  burger.classList.toggle(`hamburger--active`)
})
})
