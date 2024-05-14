
let area;

function tomarDatos() {


    do {
        area = parseInt(prompt("Introduce la superficie de tu huerto en metros cuadrados"));


    } while (area <= 0);
    return area;
    console.log(area)

}

let tomate;
let lechuga;
let pepino;
let calabacin;

function sembrar() {

    tomate = parseInt(prompt("Cuantos tomates quieres sembrar?"));
    area = area - tomate;
    if (area > 0) {

        lechuga = parseInt(prompt("Todavia tenemos hueco, cuantas lechugas quieres plantar?"));
        area = area - (lechuga / 4);
        if (area > 0) {

            pepino = parseInt(prompt("Todavia tenemos hueco, cuantos pepinos quieres plantar?"));
            area = area - (pepino / 2);

            if (area > 0) {

                calabacin = parseInt(prompt("Todavia tenemos hueco, cuantos calabacines quieres plantar?"));
                areafinal = area - (calabacin);




            } else {
                alert("El huerto ya está lleno, lo siento")
            }



        } else {
            alert("El huerto ya está lleno, lo siento")
        }



    } else {
        alert("El huerto ya está lleno, lo siento")
    }
}

function dibujarHuerto() {
    huerto = [{ "Superficie libre: ": areafinal }, { "Tomates": tomate }, { "Pepinos": pepino }, { "Lechugas": lechuga }, { "Calabacin": calabacin }];
    for (let i = 0; i < huerto.length; i++) {
        console.log(huerto[i]);
    }
}
function start() {
    tomarDatos();
    sembrar();
    dibujarHuerto();

}


