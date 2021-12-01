/*
EJERCICIO 8. Elabora un programa que pida números por teclado
y finalice cuando introduzcamos el número 0. 
Debe informarnos cuantos números se han introducido el total 
y de ellos cuantos son pares y cuantos impares.
Variante del ejercicio ej08a donde el bucle se controla con una variable Interruptor booleana. 
*/

let numero;   // numero a pedir por teclado
let cantTotalNum = 0; // Contador para la cantidad total de números introducidos
let cantPares= 0; // Contador para la cantidad de números pares introducidos
let cantImpares = 0;   // Contador para la cantidad de números pares introducidos
let continuar = true;  // Interruptor que controlará el bucle de petición de números

let readlineSync = require('readline-sync');

do {
  // Pido el número
  numero = readlineSync.questionInt("Introduce un numero: ");
  // Si el numero es cero no lo considero
  if (numero != 0) {
      // incremento el contador de número introducidos
      cantTotalNum++;
      if (numero % 2 == 0) {
        // el número es par e incremento el contador de números pares 
        cantPares++;
      } else {
        // el número es impar e incremento el contador de números impares
        cantImpares++;
        
      }
  } else {
      continuar = false;
  }
} while (continuar);

// Una vez fuera del bucle, visualizo los resultados.
console.log('La cantidad total de numeros introducidos es',cantTotalNum);
console.log('Numeros pares: ',cantPares,' Numeros impares: ',cantImpares);




