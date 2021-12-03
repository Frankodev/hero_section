/** @format */

//variables
const amenidades = document.getElementById("apublicas");
const plantas = document.getElementById("plantas");
const room = document.getElementById("room");
const over = document.querySelector(".focus_overlay");
const close = document.querySelector(".close");
const modal = document.querySelector(".focus_modal");

// función para abrir el modal
const open_modal = function () {
  over.classList.remove("modal_close");
};

// función para cerrar modal
close.addEventListener("click", () => {
  over.classList.add("modal_close");
});

// función evento click para abrir el modal con los botones focus
amenidades.addEventListener("click", () => {
  open_modal();
});

plantas.addEventListener("click", () => {
  open_modal();
});

room.addEventListener("click", () => {
  open_modal();
});
