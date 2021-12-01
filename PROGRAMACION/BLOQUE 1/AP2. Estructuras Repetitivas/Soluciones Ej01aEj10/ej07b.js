/*
EJERCICIO 7. Programa que solicite la entrada de una letra por teclado 
hasta que se introduzca una vocal. En dicho momento deberá parar la ejecución. 
Solución similar a la propuesta en el ejercicio ej07a, pero haciendo uso del
método toLowerCase (para convertir a minúsculas la letra suministrada)
*/

let readlineSync = require('readline-sync');

// Declaracion de las variables del programa
let letra;
let continuar = true;  // utilizamos una variable INTERRUPTOR para controlar el bucle.

do {
  // introduzco la letra
  letra = readlineSync.question('Dame una letra: ');
  if (letra.toLowerCase() == 'x') {  // En este caso sólo comparo con la 'x' minúscula.
    // Si se ha introducido la 'X' o 'x' cambio el valor de la variable continuar
    // para que finalice el bucle
    continuar = false;
    // posible uso operador if ternario: continuar = (letra == 'X' || letra == 'x') ? false : true;
  }
} while (continuar);

// puedo avisar del fin del programa
console.log('Fin de programa');



