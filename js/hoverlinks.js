/** @format */

// variables
const links = document.querySelectorAll(".link");

const hoverLink = function (e) {
  e.preventDefault();

  if (e.target.classList.contains("link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};

// función para eliminar los id´s en la barra de navegación
links.forEach((link) => {
  link.addEventListener("click", hoverLink);
});
