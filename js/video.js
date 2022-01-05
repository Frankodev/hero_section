/** @format */

// función para pausar-continuar y poner-quitar audio al video de fondo
// Variables
const video = document.querySelector("#video");
const pause = document.querySelector("#play");
const volumen = document.querySelector("#muted");

// función evento click para dar pause o play al video de fondo
pause.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    play.name = "pause-outline";
  } else {
    video.pause();
    play.name = "play-outline";
  }
});

// función evento click para dar volumen o muted al video de fondo
volumen.addEventListener("click", () => {
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
