// Programa  que pida un carácter por teclado y compruebe si es una letra  mayúscula.

var readlineSync = require('readline-sync');

let char = readlineSync.question('Introduce un carácter para saber si es una letra mayúscula: ');

if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')){
    if (char >= 'A' && char <= 'Z'){
        console.log("El carácter es una letra MAYÚSCULA");
    }else{
        console.log("El carácter es una letra minúscula");
    }
}else{
    console.log("El carácter que has introducido no es una letra.");
}
