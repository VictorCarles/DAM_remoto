// Ejercicio 1. Pide al usuario un vector de 5 números enteros, e
// indica en pantalla la media aritmética de sus elementos.

var readlineSync = require('readline-sync');

let vector = new Array(5);
let media = 0;

for (let i=0; i<5; i++){
    vector[i] = readlineSync.questionInt("Dame un numero entero para el vector: ");
    media += vector[i];
}
media = media/vector.length;
console.log("La media aritmética de los elementos del vector es: "+media);