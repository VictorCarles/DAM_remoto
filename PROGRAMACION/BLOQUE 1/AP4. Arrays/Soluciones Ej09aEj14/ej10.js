/* 
EJERCICIO 10. Crea un array de caracteres que contenga de la ‘A’ a la ‘Z’ (solo las mayúsculas).
Después, ve pidiendo posiciones del array por teclado y si la posición es correcta,
la letra correspondiente a esa posición se añadirá a un nuevo array que se mostrará 
al final del programa en forma de string o cadena.
Se dejará de insertar posiciones cuando se introduzca un -1.

Por ejemplo, si escribo los siguientes números:
    0 // Añadirá la ‘A’
    5 // Añadirá la ‘F’
    25 // Añadirá la ‘Z’
    50 // No hará nada ya que la posición no pertenece al array.
    -1 // Finalizará y visualizará “Cadena resultante: AFZ”

*/

let readlineSync = require('readline-sync');
let posicion; // posicion que se pide por teclado
let letrasMay = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
                        'Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']
let resultado = [];

do {
     posicion = readlineSync.questionInt('Posicion (-1 para terminar): ');
     if ((posicion>=0) && (posicion <letrasMay.length)) {  // La posición es correcta.
        // Añado al array resultado el elemento de letrasMay correspondiente al índice posicion
        resultado.push(letrasMay[posicion]);
    }
} while (posicion != -1);

console.log('El resultado es: ' + resultado.toString());

