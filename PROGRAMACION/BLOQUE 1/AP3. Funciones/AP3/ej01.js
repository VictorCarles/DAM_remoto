// EJERCICIO 1. Programa que pida un número y nos diga si es para o impar. Tiene que utilizar una función esPar.

// Funciones

function esPar(num){
    if(num % 2 == 0){
        return true;
    }else{
        return false;
    } // Se podría resumir como "return (num%2==0);"
}

// Programa principal
var readlineSync = require("readline-sync");

let numero = readlineSync.question("Dame un número para comprobar si es par o impar: ")
if (esPar(numero)){
    console.log (numero+" es par.");
}else{
    console.log (numero+" es impar.");
}