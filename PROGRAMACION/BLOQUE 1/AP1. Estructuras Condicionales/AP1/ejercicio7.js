
let readlineSync = require('readline-sync');

let frase1 = readlineSync.question('Primera frase: ');
let frase2 = readlineSync.question('Segunda frase: ');

if (frase1 == frase2){
    console.log('SI son iguales');
}else{
    console.log('NO son iguales');
}