/** @format */

//variables
const modal = document.querySelector(".focus_overlay");
const contenedorImagen = document.querySelector(".focus_modal");
const closeModal = document.querySelector(".close");

// ids rooms planta
const sala = document.getElementById("sala");
const recamara = document.getElementById("recamara");
const recamaraJr = document.getElementById("recamaraJr");
const recamaraInd = document.getElementById("recamaraInd");
const cocina = document.getElementById("cocina");
const baño = document.getElementById("baño");

// función para abrir modal de sembrado y planta
const openModal = function () {
  modal.classList.remove("modal_close");
};

// función para abrir modal en planta, para ver las imagenes del interior
// sala
sala.addEventListener("click", () => {
  openModal();
  contenedorImagen.innerHTML = `
        <img
          src="/img/proyecto/galeria/1_Interior.jpeg"
          alt="Pacífico Diamante Isla Tortuga"
        />
  `;
});
// recamara Principal
recamara.addEventListener("click", () => {
  openModal();
  contenedorImagen.innerHTML = `
        <img
          src="/img/proyecto/galeria/5_Interior.jpg"
          alt="Galería de Imagenes de Pacífico Diamante Etapa Isla Tortuga"
        />
  `;
});
// recamara Junior
recamaraJr.addEventListener("click", () => {
  openModal();
  contenedorImagen.innerHTML = `
        <img
          src="/img/proyecto/galeria/9_Interior.jpg"
          alt="Galería de Imagenes de Pacífico Diamante Etapa Isla Tortuga"
        />
  `;
});
// recamara Individual
recamaraInd.addEventListener("click", () => {
  openModal();
  contenedorImagen.innerHTML = `
        <img
          src="/img/proyecto/galeria/7_Interior.jpg"
          alt="Galería de Imagenes de Pacífico Diamante Etapa Isla Tortuga"
        />
  `;
});
// cocina
cocina.addEventListener("click", () => {
  openModal();
  contenedorImagen.innerHTML = `
        <img
          src="/img/proyecto/galeria/4_Interior.jpeg"
          alt="Pacífico Diamante Isla Tortuga"
        />
  `;
});
// baño
baño.addEventListener("click", () => {
  openModal();
  contenedorImagen.innerHTML = `
        <img
          src="/img/proyecto/galeria/12_Interior.jpeg"
          alt="Galería de Imagenes de Pacífico Diamante Etapa Isla Tortuga"
        />
  `;
});

// función para cerrar modal
closeModal.addEventListener("click", () => {
  modal.classList.add("modal_close");
});
