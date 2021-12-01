
var readlineSync = require('readline-sync');

let nota = readlineSync.questionInt('Dime la nota que has sacado: ');

if ( nota >= 0 && nota <= 10){
    if ( nota > 5) {
        console.log ("Felicidades! Has aprobado ^^");
        console.log ("Sigue así campeón.");
    } else{
        console.log ("No has aprobado, lo siento.");
        console.log ("Más suerte la próxima vez.");
    }
}else{
    console.log ("La nota no es valida");
}
