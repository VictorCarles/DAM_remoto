/*
EJERCICIO 8. Programa que lea dos caracteres y compruebe si son dos letras minúsculas 
En esta propuesta la condición/expresión para ver si ambos carácteres son minúsculas 
se asigna a una variable booleana -aunque es más código, la estructura condicional es más
legible y entendible, quizá....
*/

let readlineSync = require('readline-sync');
let car1 = readlineSync.question('Primer caracter: ');
let car2 = readlineSync.question('Segundo caracter: ');
let sonMinuscula;

if ((car1.length != 1) || (car2.length != 1)) 
    // los datos introducidos no son correctos. Deben tener 1 solo caracter.
    console.log('Un caracter tiene una longitud de 1. Algo no ha ido bien en la entrada de datos...')
else {
    sonMinuscula = (car1>='a' && car1<='z') && (car2>='a' && car2<='z');
    if (sonMinuscula)
        console.log('Ambos caracteres suministrados son minuscula.')
    else 
        console.log('Alguno (o ambos) caracteres suministrados NO son minuscula.');
}    
