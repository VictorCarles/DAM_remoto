/*
EJERCICIO 14. 
Programa que permita adivinar al usuario un determinado número entero y positivo entre 1 y 100.
El programa deberá generar el número de forma aleatoria
(recuerda la utilidad del objeto Math con su método random).
Tras la generación, el programa deberá ir pidiendo números e informando al usuario
si dicho número es mayor o menor que el que hay que adivinar.
Una vez adivinado, informa al usuario del número de intentos que ha realizado para acertar. 
Además, el programa, al inicio de la ejecución pedirá el número de intentos permitidos e irá
informando de los que quedan disponibles según se va avanzando en el juego. Si se agotan los 
intentos permitidos el juego finalizará informando de ello.
*/

let readlineSync = require('readline-sync');

let numeroAcertar; // variable que almacena el número a acertar.
let numIntroducido; // variable que almacena el número que se va pidiendo en cada iteración
let intentos; // variable que almacena el número de intentos para acertar el número
let acertado = false; // variable Interruptor que controlará el bucle 

// Generación aleatoria y preparación del número a acertar
numeroAcertar = Math.random() * 100; // Genera un número aleatorio entre 0 y 100
numeroAcertar = Math.round(numeroAcertar); // Redondeamos el número al entero más proximo

// Petición del número de intentos
console.log("\nDebes acertar un número que he generado aleatoriamente entre 1 y 100");
do {
  intentos = readlineSync.question("Cuantos intentos quieres tener? ");
  if (intentos <= 0)
    console.log("Número de intentos no válido. Debe ser un número mayor que cero.")
} while (intentos <= 0);
do {
  numIntroducido = readlineSync.questionInt('\nIntroduce un numero (y suerte!!!): ');
  if (numIntroducido == numeroAcertar) {
    // Hemos acertado
    console.log('Has acertado!!!.\n');
    acertado = true;  // cambio la variable Interruptor para salir del bucle.
  }
  if (numIntroducido < numeroAcertar) {
    // El número a acertar es mayor que el que se ha introducido
    console.log('PISTA: El numero es mayor. Vuelve a intentarlo.');
  }
  if (numIntroducido > numeroAcertar) {
    // El número a acertar es menor que el que se ha introducido
    console.log('PISTA: El numero es menor. Vuelve a intentarlo.');
  }
  intentos--; // Decremento el numero de intentos
  if (numIntroducido != numeroAcertar) {
    console.log("Te quedan", intentos, "intentos.");
  }
} while (acertado == false && intentos > 0);

if (intentos == 0 && acertado == false) {
  console.log("Has agotado el número de intentos. Has perdido!!!.")
}
