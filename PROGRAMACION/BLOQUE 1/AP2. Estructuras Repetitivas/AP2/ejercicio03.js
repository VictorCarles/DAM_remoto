// Solicita dos numeros y muestra su producto por el método de las sumas sucesivas
// Ejemplo 5x4 = 20 ->  5+5+5+5 = 20

var readlineSync = require("readline-sync");

let resultado = 0;

let num1 = readlineSync.questionInt("Dame un número para multiplicar por otro: ");
let num2 = readlineSync.questionInt("Dame el numero por el cual quieres multiplicar el primer numero: ");

for(let i=0; i<=num2; i++){
    resultado += num1;
}

console.log("El resultado de ",num1,"x",num2," es: ", resultado);