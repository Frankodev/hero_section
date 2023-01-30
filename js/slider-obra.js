/** @format */

const btnLeftUno = document.getElementById("leftUno");
const btnRightUno = document.getElementById("rightUno");
const carruselUno = document.getElementById("cuno");
let margenUno = 0;

const handleMargenRUno = function () {
  if (margenUno == 0) {
    carruselUno.style.transform = "translateX(-100%)";
    margenUno = 1;
  } else if (margenUno == 1 || margenUno == 3) {
    carruselUno.style.transform = "translateX(-200%)";
    margenUno = 2;
  }
};

const handleMargenLUno = function () {
  if (margenUno == 2) {
    carruselUno.style.transform = "translateX(-100%)";
    margenUno = 3;
  } else if (margenUno == 3 || margenUno == 1) {
    carruselUno.style.transform = "translateX(0)";
    margenUno = 0;
  }
};

btnRightUno.addEventListener("click", handleMargenRUno);
btnLeftUno.addEventListener("click", handleMargenLUno);

const btnLeftDos = document.getElementById("leftDos");
const btnRightDos = document.getElementById("rightDos");
const carruselDos = document.getElementById("cdos");
let margenDos = 0;

const handleMargenRDos = function () {
  if (margenDos == 0) {
    carruselDos.style.transform = "translateX(-100%)";
    margenDos = 1;
  } else if (margenDos == 1 || margenDos == 3) {
    carruselDos.style.transform = "translateX(-200%)";
    margenDos = 2;
  }
};

const handleMargenLDos = function () {
  if (margenDos == 2) {
    carruselDos.style.transform = "translateX(-100%)";
    margenDos = 3;
  } else if (margenDos == 3 || margenDos == 1) {
    carruselDos.style.transform = "translateX(0)";
    margenDos = 0;
  }
};

btnRightDos.addEventListener("click", handleMargenRDos);
btnLeftDos.addEventListener("click", handleMargenLDos);

const btnLeftTres = document.getElementById("leftTres");
const btnRightTres = document.getElementById("rightTres");
const carruselTres = document.getElementById("ctres");
let margenTres = 0;

const handleMargenRTres = function () {
  if (margenTres == 0) {
    carruselTres.style.transform = "translateX(-100%)";
    margenTres = 1;
  } else if (margenTres == 1 || margenTres == 3) {
    carruselTres.style.transform = "translateX(-200%)";
    margenTres = 2;
  }
};

const handleMargenLTres = function () {
  if (margenTres == 2) {
    carruselTres.style.transform = "translateX(-100%)";
    margenTres = 3;
  } else if (margenTres == 3 || margenTres == 1) {
    carruselTres.style.transform = "translateX(0)";
    margenTres = 0;
  }
};

btnRightTres.addEventListener("click", handleMargenRTres);
btnLeftTres.addEventListener("click", handleMargenLTres);
