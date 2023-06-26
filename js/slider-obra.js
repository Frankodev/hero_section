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

// Carrusel 2
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

// Carrusel 3
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

// Carrusel 4
const btnLeftCuatro = document.getElementById("leftcuatro");
const btnRightCuatro = document.getElementById("rightcuatro");
const carruselCuatro = document.getElementById("ccuatro");
let margenCuatro = 0;


const handleMargenRCuatro = function () {
  if (margenCuatro == 0) {
    carruselCuatro.style.transform = "translateX(-100%)";
    margenCuatro = 1;
  } else if (margenCuatro == 1 || margenCuatro == 3) {
    carruselCuatro.style.transform = "translateX(-200%)";
    margenCuatro = 2;
  }
};

const handleMargenLCuatro = function () {
  if (margenCuatro == 2) {
    carruselCuatro.style.transform = "translateX(-100%)";
    margenCuatro = 3;
  } else if (margenCuatro == 3 || margenCuatro == 1) {
    carruselCuatro.style.transform = "translateX(0)";
    margenCuatro = 0;
  }
};

btnRightCuatro.addEventListener("click", handleMargenRCuatro);
btnLeftCuatro.addEventListener("click", handleMargenLCuatro);

// Carrusel 5
const btnLeftCinco = document.getElementById("leftcinco");
const btnRightCinco = document.getElementById("rightcinco");
const carruselCinco = document.getElementById("ccinco");
let margenCinco = 0;


const handleMargenRCinco = function () {
  if (margenCinco == 0) {
    carruselCinco.style.transform = "translateX(-100%)";
    margenCinco = 1;
  } else if (margenCinco == 1 || margenCinco == 3) {
    carruselCinco.style.transform = "translateX(-200%)";
    margenCinco = 2;
  }
};

const handleMargenLCinco = function () {
  if (margenCinco == 2) {
    carruselCinco.style.transform = "translateX(-100%)";
    margenCinco = 3;
  } else if (margenCinco == 3 || margenCinco == 1) {
    carruselCinco.style.transform = "translateX(0)";
    margenCinco = 0;
  }
};

btnRightCinco.addEventListener("click", handleMargenRCinco);
btnLeftCinco.addEventListener("click", handleMargenLCinco);

// Carrusel 6
const btnLeftSeis = document.getElementById("leftseis");
const btnRightSeis = document.getElementById("rightseis");
const carruselSeis = document.getElementById("cseis");
let margenSeis = 0;


const handleMargenRSeis = function () {
  if (margenSeis == 0) {
    carruselSeis.style.transform = "translateX(-100%)";
    margenSeis = 1;
  } else if (margenSeis == 1 || margenSeis == 3) {
    carruselSeis.style.transform = "translateX(-200%)";
    margenSeis = 2;
  }
};

const handleMargenLSeis = function () {
  if (margenSeis == 2) {
    carruselSeis.style.transform = "translateX(-100%)";
    margenSeis = 3;
  } else if (margenSeis == 3 || margenSeis == 1) {
    carruselSeis.style.transform = "translateX(0)";
    margenSeis = 0;
  }
};

btnRightSeis.addEventListener("click", handleMargenRSeis);
btnLeftSeis.addEventListener("click", handleMargenLSeis);

// Carrusel 7
const btnLeftSiete = document.getElementById("leftsiete");
const btnRightSiete = document.getElementById("rightsiete");
const carruselSiete = document.getElementById("csiete");
let margenSiete = 0;


const handleMargenRSiete = function () {
  if (margenSiete == 0) {
    carruselSiete.style.transform = "translateX(-100%)";
    margenSiete = 1;
  } else if (margenSiete == 1 || margenSiete == 3) {
    carruselSiete.style.transform = "translateX(-200%)";
    margenSiete = 2;
  }
};

const handleMargenLSiete = function () {
  if (margenSiete == 2) {
    carruselSiete.style.transform = "translateX(-100%)";
    margenSiete = 3;
  } else if (margenSiete == 3 || margenSiete == 1) {
    carruselSiete.style.transform = "translateX(0)";
    margenSiete = 0;
  }
};

btnRightSiete.addEventListener("click", handleMargenRSiete);
btnLeftSiete.addEventListener("click", handleMargenLSiete);
