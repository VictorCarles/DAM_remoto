// Crea un programa que teniendo en cuenta una nota
// de examen muestre por pantalla si se ha aprobado o no.
// Para aprobar, la nota debe ser superior a un 5.
var readlineSync = require('readline-sync');


let nota = readlineSync.questionInt('Dime la nota que has sacado: ');

if ( nota > 5) {
    console.log ("Felicidades! Has aprobado ^^");
    console.log ("Sigue así campeón.");
}
