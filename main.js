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
        let placer = document.querySelector("#contenedorPlacer");
        let informacionPersonaLs;

        if (nombre === "" || razon === "" || nacionalidad === "") {
          alert("Por favor complete los campos");
        } else {
          let informacionPersona = new Persona(nombre, razon, nacionalidad);
          localStorage.setItem("InformacionPersona", JSON.stringify(informacionPersona));
          informacionPersonaLs = JSON.parse(localStorage.getItem("InformacionPersona"));

          alert("");
        }
        placer.style.display = "block";
        placer.innerHTML = "es un placer conocerte " + informacionPersonaLs.nombrePersona;
      }
    }
  });
}

mostrarFrasesConocer("#primero", "#inputsPersona", "#boton");
