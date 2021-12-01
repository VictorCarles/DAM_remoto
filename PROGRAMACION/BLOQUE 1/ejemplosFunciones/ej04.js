// Funciones

function visualizarTabla(tabla, lim){

    for (let i = 1; i<=lim; i++){
        console.log(tabla, "x", i, "=", tabla*i);
    }
}

// Programa Principal

let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt("Dame la tabla: ");
let limite = readlineSync.questionInt("Dame el límite: ");

visualizarTabla(numero, limite);