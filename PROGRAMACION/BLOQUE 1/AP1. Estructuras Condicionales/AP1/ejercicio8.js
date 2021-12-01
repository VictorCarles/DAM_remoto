// Programa que lea dos caracteres y compruebe si son dos letras minúsculas

var readlineSync = require('readline-sync');

let char1 = readlineSync.question('Introduce el primer carácter para saber si es una letra minúcula: ');
let char2 = readlineSync.question('Introduce el segundo carácter para saber si es una letra minúscula: ');
let sonMinuscula;

if (char1.length != 1 || char2.length != 1 ){
    console.log("El carácter tiene una longitud superior a 1, es invalido");

}else{
    sonMinuscula = (char1 >= 'a' && char1 <= 'z') && (char2 >= 'a' && char2 <= 'z');
    if (sonMinuscula){
        console.log("Los carácteres son letras minúsculas.");
    }else{
        console.log("Uno o ambos carácteres no son letras minúsculas.");
    }   
}