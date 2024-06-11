
let largo;
let ancho;

function tomarLargo() {


    do {
        largo = parseInt(prompt("Introduce el largo de tu huerto en metros"));
        

    } while (largo <= 0);
    return largo;
}

function tomarAncho (){
    do {
        ancho = parseInt(prompt("Introduce el ancho de tu huerto en metros"));


    } while (ancho <= 0);
    return ancho;
     
}

function dibujarHuerto() {
    
    var body = document.getElementsByTagName("body")[0];
  
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < ancho; i++) {
      var hilera = document.createElement("tr");
  
      for (var j = 0; j < largo; j++) {
        var celda = document.createElement("td");
        hilera.appendChild(celda);
      }
  
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    const h3 = document.getElementById("subtitulo");
    const boton = document.getElementById("boton");
    h3.remove();
    boton.remove();
  }
  
function guardarDatos(){
  
  localStorage.setItem("Largo del huerto", largo);
  localStorage.setItem("Ancho del huerto", ancho);
  localStorage.setItem("Largo del huerto", area);

}


function start() {
    tomarLargo();
    tomarAncho();
    dibujarHuerto();
    guardarDatos();

}


