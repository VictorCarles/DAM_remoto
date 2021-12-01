// Programa que calcule la distancia recorrida (m) por un móvil que tiene una velocidad constante (m/sg)
// durante un T (sg). Considera que es un MRU (Movimiento Rectilíneo Uniforme).
var readlineSync = require('readline-sync');

let vel = readlineSync.questionInt('Dame la velocidad constante: ');
let t = readlineSync.questionInt('Dime el tiempo: ');
if (t <0){
    console.log("Ese tiempo es invalido, introduce un tiempo positivo.");
}else{
    let m = vel * t;
    console.log("La distancia recorrida por el móvil que se desplazaba a "+vel+" m/s, durante "+t+" seg, es de: "+m+" metros.")
}

