/** @format */

// variables
const btn_menu = document.querySelector(".btn_menu");
const menu = document.querySelector(".menu");
const show = document.querySelector(".show");

// función click para abri menú responsive
btn_menu.addEventListener("click", function () {
  btn_menu.classList.toggle("active");
  menu.classList.toggle("active");
  show.classList.toggle("showBody");
});
