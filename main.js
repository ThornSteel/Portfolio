class Persona {
  constructor(nombrePersona, razonPersona, nacionalidadPersona) {
    this.nombrePersona = nombrePersona;
    this.razonPersona = razonPersona;
    this.nacionalidadPersona = nacionalidadPersona;
  }
}

function mostrarFrasesConocer(selector1, contenedorPersona, botonSelector) {
  let primero = document.querySelector(selector1);
  let contenedor = document.querySelector(contenedorPersona);

  let primeroMostrado = true;
  let contenedorMostrado = false;

  let botonSiguiente = document.querySelector("#siguiente");

  let boton = document.querySelector(botonSelector).addEventListener("click", function () {
    primeroMostrado = false;
    contenedor.style.opacity = "1";

    let btnDesaparecer = document.querySelector(botonSelector);
    btnDesaparecer.style.display = "none";

    if (!primeroMostrado) {
      contenedorMostrado = true;
      contenedor.style.display = "block";
      

      botonSiguiente.addEventListener("click", elGuiaVikingo);

      function elGuiaVikingo() {
        let nombre = document.querySelector("#nombre").value;
        let razon = document.querySelector("#razon").value;
        let nacionalidad = document.querySelector("#nacionalidad").value;
        let informacionPersonaLs;

        (nombre === "" || razon === "" || nacionalidad === "") ? (
          event.preventDefault(),
          Swal.fire({
            position: "top",
            icon: "warning",
            title: "Por favor complete los campos",
            timer: 1500
          })
        ) : (
          (() => {
            let informacionPersona = new Persona(nombre, razon, nacionalidad);
            localStorage.setItem("InformacionPersona", JSON.stringify(informacionPersona));
            informacionPersonaLs = JSON.parse(localStorage.getItem("InformacionPersona"));
          })()
        );
        
      }
    }
  });
}

mostrarFrasesConocer("#primero", "#inputsPersona", "#boton");

ScrollReveal().reveal(".widget", { interval: 400 });

/* Codigo para la promesa */

let listaDeTecnologias = [
  { nombre: "bootStrap", imagen: "img/BootStrap-removebg-preview.png" },
  { nombre: "JavaScript", imagen: "img/JavaScript-removebg-preview.png" },
  { nombre: "Html", imagen: "img/html-removebg-preview.png" },
  { nombre: "Css", imagen: "img/CSS-removebg-preview.png" },
  { nombre: "SASS", imagen: "img/CSS-removebg-preview.png" },
  { nombre: "GitHub", imagen: "img/CSS-removebg-preview.png" },
];

/* Promesa  */
const obtenerTecnologias = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listaDeTecnologias);
    }),
      0;
  });
};

/* renderizar tarjetas de tecnologia */

function renderizarImagen(x) {
  let = contenedorTarjetas = ""
  for (const tarjeta of x) {
    contenedorTarjetas += `
    <div class="contenedorTarjetaTecnologias">
      <div class="contenedorImgTecnologias">
        <img src="${tarjeta.imagen}" alt="${tarjeta.nombre}" />
      </div>
      <div class="contenedorDescripcion">
        <p>${tarjeta.nombre}</p>
     </div>
    </div>
    `
  }
  document.querySelector(".contenedorTecnologias").innerHTML = contenedorTarjetas
}
function mostrarTarjetas() {
  obtenerTecnologias().then((data) => {
    renderizarImagen(data);
  });
}
mostrarTarjetas()
