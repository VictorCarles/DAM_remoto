// Calcula el promedio artmético de las notas obtenidas por un estudiante.
// Las notas corresponden a tres exámenes parciales que deberán ser suministradas por teclado.

var readlineSync = require('readline-sync');

let ex1 = readlineSync.questionInt("Dime la nota del examen nº1: ");
let ex2 = readlineSync.questionInt("Dime la nota del examen nº2: ");
let ex3 = readlineSync.questionInt("Dime la nota del examen nº3: ");

let promedio = (ex1 + ex2 + ex3) / 3;

console.log("El promedio aritmetico de tus tres examenes es: ", promedio);