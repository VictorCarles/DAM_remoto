// Programa que tras recibir un numero del 1 al 10, saque su equivalente en numeros romanos.

let readlineSync = require('readline-sync');

let num = readlineSync.question('Introduce el numero a convertir: ');

switch (num){
    case '1':
        console.log(num,"en numeros romanos es I");
        break;
    case '2':
        console.log(num,"en numeros romanos es II");
        break;
    case '3':
        console.log(num,"en numeros romanos es III");
        break;
    case '4':
        console.log(num,"en numeros romanos es IV");
        break;
    case '5':
        console.log(num,"en numeros romanos es V");
        break;
    case '6':
        console.log(num,"en numeros romanos es VI");
        break;
    case '7':
        console.log(num,"en numeros romanos es VII");
        break;
    case '8':
        console.log(num,"en numeros romanos es VIII");
        break;
    case '9':
        console.log(num,"en numeros romanos es IX");
        break;
    case '10':
        console.log(num,"en numeros romanos es X");
        break;
    default:
        console.log("El número suministrado no es valido.");
        break;
}
