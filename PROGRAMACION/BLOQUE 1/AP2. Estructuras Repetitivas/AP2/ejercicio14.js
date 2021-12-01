/*
Ejercicio 14. Genera un numero aleatorio entre 1 y 100.
Pidele al usuario que lo adivine. Si no lo adivina le dices si el numero que ha ingresado
es mayor o menos que el que tiene que adivinar.
Cuando el usuario adivine el numero, se informa al usuario del numero de intentos.
*/


var readlineSync = require('readline-sync');

let cont = 0;
let num=0;
let numOculto = Math.trunc(Math.random()*100) + 1;

do{
    num = readlineSync.questionInt("Introduce un numero: ");
    cont += 1;
    
    if ( num == numOculto) break;

    if (num < numOculto){
        console.log("Tu numero es MENOR que el numero misterioso");
    }
    if(num > numOculto){
        console.log("Tu numero es MAYOR que el numero misterioso");
    }
}while (num != numOculto)

console.log("Has adivinado el numero misterioso!!");
console.log("El numero a adivinar era:",numOculto,"\nHas realizado:",cont,"intentos");
