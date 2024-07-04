
let largo;
let ancho;

function capturaDatos(){
  largo = parseInt(document.getElementById("largo").value);
 ancho = parseInt(document.getElementById("ancho").value);
}

function dibujarHuerto() {
    
    var body = document.getElementsByTagName("body")[0];
  
    var tabla = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    for (var i = 0; i < ancho; i++) {
      var hilera = document.createElement("tr");
      
  
      for (var j = 0; j < largo; j++) {
        var celda = document.createElement("td");
        celda.id=`${i}-${j}`
        hilera.appendChild(celda);
      }
  
      tblBody.appendChild(hilera);
    }
  
    tabla.appendChild(tblBody);
    body.appendChild(tabla);
    const h3 = document.getElementById("subtitulo");
    const form = document.getElementById("form");
    h3.remove();
    form.remove();
  }
  
function guardarDatos(){
  
  localStorage.setItem("Largo del huerto", largo);
  localStorage.setItem("Ancho del huerto", ancho);
  localStorage.setItem("Largo del huerto", area);

}

function plantar(){
  document.getElementById("1-3").style.backgroundImage = "url(../assets/tomatoe.jpg)"
}


function start() {
   capturaDatos();
    dibujarHuerto();
    plantar();
    guardarDatos();

}


