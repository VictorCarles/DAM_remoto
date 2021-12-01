var readlineSync = require('readline-sync');

let num = readlineSync.questionInt('Dame el primer numero');
let resultado = num;
num = readlineSync.questionInt('Dame el segundo numero');
resultado += num;
console.log("El resultado es ", resultado);
