/* 
EJERCICIO 9. Crea un array de números de un tamaño especificado por teclado.
El array contendrá los números primos a partir del 1 y 
hasta completar el tamaño especificado del array. 
Utiliza una función que calcule si el número pasado por parámetro es primo o no.
*/

/** 
 * 
 * @param {number} num - Número a comprobar
 * @returns {boolean}  - Si es primo o no es primo
 */

function esPrimo(num) {
    if ((num==1) || (num==2)) { // si es el 1 o el 2 es primo
        return true;
    } else {
        for(div=2;div<num;div++) {
            if (num % div == 0) { // encuentro un valor que divide a num (tiene divisores)
                return false;
            }
        }
        return true; // si he finalizado el bucle y no ha devuelto false es que no tiene
                     // divisores. En este punto puedo devolver true (es primo)   
    }
}

let readlineSync = require('readline-sync');
let tamArray = readlineSync.questionInt('Tamanyo del array: ');
let numPrimos = new Array(tamArray); // defino un array numeros con el tamaño introducido por teclado

let pos = 0; numero = 1; 

do {
    if (esPrimo(numero)) {  // si el número considerado es primo
        numPrimos[pos] = numero; // lo asigno a pos en el array
        pos++; // e incremento y apunto a la siguiente posición del array
    }
    numero++; // haya sido primo o no, paso a considerar el siguiente número
} while (pos<tamArray);  // mientras pos sea menor que el tamaño del array previsto repito

// visualización (primero como Array y luego como string)
console.log(numPrimos);
console.log(numPrimos.toString());

