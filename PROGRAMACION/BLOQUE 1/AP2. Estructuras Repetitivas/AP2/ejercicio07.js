// EJERCICIO 7.

var readlineSync = require('readline-sync');
let equis = false;

do{
    let letra = readlineSync.question("Introduce una letra: ");

    if ( letra == 'x' || letra == 'X'){
        equis = true;
        console.log("Hemos encontrado la x, o la X.");
    }else{
        equis = false;
    }

}while (equis != true)

