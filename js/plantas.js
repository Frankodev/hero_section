/** @format */

// declarando variables
const precio = document.getElementById("precio");
const pb = document.getElementById("pb");
const n1 = document.getElementById("n1");
const ph = document.getElementById("ph");
const divph = document.getElementById("divph");

const terraza = document.getElementById("terraza");
const roof = document.getElementById("roof");

pb.addEventListener("click", () => {
  divph.innerHTML = `
          
          <img
            id="plantas"
            src="/img/proyecto/pb.png"
            alt="Planta Tipo Departamento Residencial Pacífico Diamante Isla Tortuga"
          />
          <div class="planta_medidas">
            <span>
              <ion-icon class="size" name="move-outline"></ion-icon>
            </span>
            <p id="m2">142 m<sup class="m2">2</sup> de superficie</p>
          </div>
        `;
  terraza.style.display = "flex";
  roof.style.display = "none";
  if (
    n1.classList.contains("plantas__active") ||
    ph.classList.contains("plantas__active")
  ) {
    n1.classList.remove("plantas__active");
    ph.classList.remove("plantas__active");
    pb.classList.add("plantas__active");
  }

  precio.innerHTML = "<p><span>$</span> 4,190,000 <span>MXN</span></p>";
});

n1.addEventListener("click", () => {
  divph.innerHTML = `
          
          <img
            id="plantas"
            src="/img/proyecto/n1yn2.png"
            alt="Planta Tipo Departamento Residencial Pacífico Diamante Isla Tortuga"
          />
          <div class="planta_medidas">
            <span>
              <ion-icon class="size" name="move-outline"></ion-icon>
            </span>
            <p id="m2">137 m<sup class="m2">2</sup> de superficie</p>
          </div>
        `;
  terraza.style.display = "none";
  roof.style.display = "none";
  if (
    pb.classList.contains("plantas__active") ||
    ph.classList.contains("plantas__active")
  ) {
    pb.classList.remove("plantas__active");
    ph.classList.remove("plantas__active");
    n1.classList.add("plantas__active");
  }

  precio.innerHTML = `
  <p><span>$</span> 3,890,000 <span>MXN</span> | 1er Nivel</p>
  <p><span>$</span> 3,980,000 <span>MXN</span> | 2do Nivel</p>
  `;
});

ph.addEventListener("click", () => {
  divph.innerHTML = `
          <img
            id="plantas"
            src="/img/proyecto/ph.png"
            alt="Planta Tipo Departamento Residencial Pacífico Diamante Isla Tortuga"
          />
          <img
            id="plantas"
            src="/img/proyecto/rg.png"
            alt="Planta Tipo Departamento Residencial Pacífico Diamante Isla Tortuga"
          />
          <div class="planta_medidas">
            <span>
              <ion-icon class="size" name="move-outline"></ion-icon>
            </span>
            <p id='m2'>223 m<sup class='m2'>2</sup> de superficie</p>
          </div>`;
  terraza.style.display = "none";
  roof.style.display = "flex";
  if (
    pb.classList.contains("plantas__active") ||
    n1.classList.contains("plantas__active")
  ) {
    pb.classList.remove("plantas__active");
    n1.classList.remove("plantas__active");
    ph.classList.add("plantas__active");
  }

  precio.innerHTML = "<p><span>$</span> 4,900,000 <span>MXN</span></p>";
});
