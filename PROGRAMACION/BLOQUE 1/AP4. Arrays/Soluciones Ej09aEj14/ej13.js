/* 
EJERCICIO 13. En España cada persona está identificada con un Numero de Identificación Fiscal
(NIF) en el que figura un número y una letra, por ejemplo: 56999545W.
Crea un programa que calcule la letra de un NIF a partir del número de DNI 
que introduzca el usuario. Es decir, se debe pedir el DNI sin la letra por teclado 
y el programa nos devolverá el DNI completo (con la letra), es decir, el NIF.

Para calcular la letra a partir del DNI se sigue el siguiente algoritmo: 
se debe tomar el resto de dividir nuestro número de DNI entre 23. 
El resultado debe estar por tanto entre 0 y 22. La letra correspondiente será a la que apunte 
dicho índice en la tabla de referencia.
Crea una función obtenerLetra(numeroDNI) donde según el resultado de la anterior fórmula
busque en un array de caracteres la posición que corresponda a la letra. 
Por ejemplo, si introducimos el DNI 20267079, el resto de dividirlo por 23 sería 8,
luego la letra sería la P, que es la que ocupa esa posición en la tabla de caracteres.
*/

function obtenerLetra(dni) {
    let tablaLetras = ['T','R','W','A','G','M','Y','F','P','D','X','B',
                      'N','J','Z','S','Q','V','H','L','C','K','E']; 
    let pos = dni % 23;
    return tablaLetras[pos];
}

let readlineSync = require('readline-sync');

let dni = readlineSync.questionInt('Introduce el DNI: ');
// llamo a la función obtenerLetra para que me devuelva la letra correcta
let letra = obtenerLetra(dni);
// visualizo resultados
console.log('El NIF es ' + dni + letra);
