
let largo;
let ancho;
let area;
let numerodetomateras;
let numerodeberenjenas;
let numerodecalabazas;
let numerodelechugas;
let terrenoocupado = 0;
let terrenoocupado2 = 0;
let terrenoocupado3 = 0;
let terrenoocupado4 = 0;

function capturaDatos() {
  largo = parseInt(document.getElementById("largo").value);
  ancho = parseInt(document.getElementById("ancho").value);
  numerodetomateras = parseInt(document.getElementById("tomateras").value);
  numerodeberenjenas = parseInt(document.getElementById("berenjenas").value);
  numerodecalabazas = parseInt(document.getElementById("calabazas").value);
  numerodelechugas = parseInt(document.getElementById("lechugas").value);

}

function dibujarHuerto() {

  var body = document.getElementsByTagName("body")[0];

  var tabla = document.createElement("table");
  var tblBody = document.createElement("tbody");
  var button = document.createElement("button");

  button.setAttribute("id", "botondesiembra");
  button.innerText = "Vamos a recoger la cosecha";
  button.addEventListener("click", calcularCosecha);

  for (var i = 0; i < ancho; i++) {
    var hilera = document.createElement("tr");


    for (var j = 0; j < largo; j++) {
      var celda = document.createElement("td");
      celda.id = `${i * ancho + j}`
      hilera.appendChild(celda);
    }

    tblBody.appendChild(hilera);
  }
  body.appendChild(button)
  tabla.appendChild(tblBody);
  body.appendChild(tabla);
  const h3 = document.getElementById("subtitulo");
  const form = document.getElementById("form");
  h3.remove();
  form.remove();
}

function guardarDatos() {

  try {

    localStorage.setItem("Largo del huerto", largo);
    localStorage.setItem("Ancho del huerto", ancho);
    localStorage.setItem("Largo del huerto", area);
    localStorage.setItem("Numero de tomateras", numerodetomateras);
    localStorage.setItem("Numero de berenjenas", numerodeberenjenas);
    localStorage.setItem("Numero de calabazas", numerodeberenjenas);
    localStorage.setItem("Numero de lechugas", numerodelechugas);

  } catch (error) {

    alert("oooops! Algo ha fallado");

  }



}

function plantar() {

  for (let index = 0; index < 3 * numerodetomateras; index += 3) {
    document.getElementById(`${index}`).style.backgroundImage = "url(./assets/tomate-soil.jpg)";
    terrenoocupado = 3 * numerodetomateras


  }
  for (let index = 0; index < 3 * numerodeberenjenas; index += 3) {
    document.getElementById(`${index + terrenoocupado}`).style.backgroundImage = "url(./assets/berenjena-soil.png)";

    terrenoocupado2 = 3 * numerodeberenjenas + terrenoocupado

  }
  for (let index = 0; index < 4 * numerodecalabazas; index += 4) {
    document.getElementById(`${index + terrenoocupado2}`).style.backgroundImage = "url(./assets/calabaza-soil.png)";

    terrenoocupado3 = 4 * numerodecalabazas + terrenoocupado2

  }
  for (let index = 0; index < 1 * numerodelechugas; index += 1) {
    document.getElementById(`${index + terrenoocupado3}`).style.backgroundImage = "url(./assets/lechuga-soil.png)";



  }



}



function start() {
  capturaDatos();
  dibujarHuerto();
  plantar();
  guardarDatos();

}

async function calcularCosecha() {
  try {
    const response = await fetch("./verduras.json");
    const data = await response.json();
    console.log(data);
    let tomateProductividad = data[0].productividad;
    let berenjenaProductividad = data[1].productividad;
    let calabazaProductividad = data[2].productividad;
    let lechugaProductividad = data[3].productividad;

    var divcosecha = document.getElementById("divcosecha");
    divcosecha.style.backgroundColor = "black"
    divcosecha.style.margin = "2em"
    divcosecha.style.padding = "2em"
    divcosecha.style.color = "white"
    divcosecha.style.textAlign = "center"
    divcosecha.innerHTML = `La produccion de tomates es de ${tomateProductividad * numerodetomateras} kg<br>
      La produccion de berenjenas es de ${berenjenaProductividad * numerodeberenjenas} kg<br>
      La produccion de calabazas es de ${calabazaProductividad * numerodecalabazas} kg<br>
      La produccion de lechugas es de ${lechugaProductividad * numerodelechugas} kg<br>
      ENHORABUENA!
      `
    document.body.insertBefore(divcosecha, button);



  }
  catch (error) {
    console.log("Error: " + error);
  }
}



