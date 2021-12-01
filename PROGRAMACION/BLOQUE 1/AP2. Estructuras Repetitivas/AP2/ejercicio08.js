// EJERCICIO 8.

var readlineSync = require('readline-sync');

let cont = 0, pares = 0, impares = 0;
let num = 1;

do{
    num = readlineSync.questionInt("Introduce un numero: ");
    cont += 1;
    if ( num == 0) break;

    if (num % 2 == 0){
        pares++;
    }else{
        impares++;
    }
}while (num != 0)

console.log("Se introdujeron: "+cont+" numeros.\nDe ellos, "+pares+" eran pares, y "+impares+" impares.");