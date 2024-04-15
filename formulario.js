// Se agrega ID en el HTML para poder vincular la función
var formulario = document.querySelector("#formulario");

formulario.onsubmit = function(e) {
  e.preventDefault();

  // Se cambian los nombres de las variables para entender qué hacen, y se agrega .value

  var nombre = formulario.elements[0].value;
  var edad = formulario.elements[1].value;
  var nacionalidad = formulario.elements[2].value;

  /* se quitan variables
    var nombre = n.value
  var edad = e.value
  */
  console.log(nombre, edad);
  console.log(nacionalidad);

  if (nombre.length === 0) {
    formulario.elements[0].classList.add("error");
  } else {
    formulario.elements[0].classList.remove("error");
  }

  if (edad < 18 || edad > 120) {
    formulario.elements[1].classList.add("error");
  } else {
    formulario.elements[1].classList.remove("error");
  }

  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
    formulario.reset();
  }
};

// Función para agregar un invitado a la lista
function agregarInvitado(nombre, edad, nacionalidad) {
  var nacionalidadTexto = "";
  
  if (nacionalidad === "ar") {
    nacionalidadTexto = "Argentina";
  } else if (nacionalidad === "mx") {
    nacionalidadTexto = "Mexicana";
  } else if (nacionalidad === "vnzl") {
    nacionalidadTexto = "Venezolana";
  } else if (nacionalidad === "per") {
    nacionalidadTexto = "Peruana";
  }

  var lista = document.getElementById("lista-de-invitados");
  
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  //se borra bloque de codigo, que se repite en su mayoria
  /*
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)
  */
  
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    
    inputNombre.value = valor;
    
    elementoLista.appendChild(spanNombre)
    elementoLista.appendChild(inputNombre)
    elementoLista.appendChild(espacio)
  }

  crearElemento("Nombre", nombre)
  crearElemento("Edad", edad)
  crearElemento("Nacionalidad", nacionalidadTexto)

  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  botonBorrar.onclick = function() {
    // this.parentNode.style.display = 'none';
    elementoLista.remove();
  };
}