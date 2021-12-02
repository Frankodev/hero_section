/** @format */

// variables
const btn_menu = document.querySelector(".btn_menu");
const menu = document.querySelector(".menu");
const show = document.querySelector(".show");
const navLinks = document.querySelectorAll(".menu ul li a");
const overlay = document.querySelector(".overlay");

// función click para abri menú responsive
btn_menu.addEventListener("click", function () {
  btn_menu.classList.toggle("active");
  menu.classList.toggle("active");
  show.classList.toggle("showBody");
  overlay.classList.toggle("active_overlay");
});

// función para cerrar menú al hacer click en un enlace
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // menu.classList.remove("active");
    btn_menu.classList.toggle("active");
    menu.classList.toggle("active");
    show.classList.toggle("showBody");
    overlay.classList.remove("active_overlay");
  });
});

// función click para quitar el menú responsive con el overlay
overlay.addEventListener("click", function () {
  btn_menu.classList.remove("active");
  menu.classList.remove("active");
  show.classList.remove("showBody");
  overlay.classList.remove("active_overlay");
});
