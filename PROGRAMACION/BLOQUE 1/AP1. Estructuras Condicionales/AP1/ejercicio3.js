// Programma que pida un número y calcule si es par o impar.

var readlineSync = require('readline-sync');

let num = readlineSync.questionInt('Introduce un número para calcular si es par o impar: ');

if (num%2 == 0) console.log("El número es par. Buenas tardes.");
if (num%2 == 1) console.log("El número es impar. Buenas tardes.");
