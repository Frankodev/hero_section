/** @format */

// variables
const btn_menu = document.querySelector(".btn_menu");
const showcase = document.querySelector(".showcase");
const overlay = document.querySelector(".overlay");

// función click para abri menú responsive
btn_menu.addEventListener("click", function () {
  btn_menu.classList.toggle("active");
  showcase.classList.toggle("active");
  overlay.classList.toggle("active_overlay");
});

// función click para quitar el menú responsive con el overlay
overlay.addEventListener("click", function () {
  btn_menu.classList.remove("active");
  showcase.classList.remove("active");
  overlay.classList.remove("active_overlay");
});

// función para pausar-continuar y poner-quitar audio al video de fondo
// Variables
const video = document.querySelector("#video");
const pause = document.querySelector("#play");
const volumen = document.querySelector("#muted");

// función evento click para dar pause o play al video de fondo
pause.addEventListener("click", () => {
  // play();
  if (video.paused) {
    video.play();
    play.name = "pause-outline";
  } else {
    video.pause();
    play.name = "play-outline";
  }
});

// function play() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }

// función evento click para dar volumen o muted al video de fondo
volumen.addEventListener("click", () => {
  // mute();
  if (video.muted == true) {
    video.volume = 1;
    video.muted = false;
    muted.name = "volume-high-outline";
  } else {
    video.volume = 0;
    video.muted = true;
    muted.name = "volume-mute-outline";
  }
});

// function mute() {
//   if (video.muted == true) {
//     video.volume = 1;
//     video.muted = false;
//   } else {
//     video.volume = 0;
//     video.muted = true;
//   }
// }
