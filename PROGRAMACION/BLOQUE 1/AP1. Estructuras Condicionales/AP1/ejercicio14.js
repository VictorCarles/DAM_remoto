
let readlineSync = require('readline-sync');

let l1 = readlineSync.question('Medida de 1er lado: ');
let l2 = readlineSync.question('Medida de 2do lado: ');
let l3 = readlineSync.question('Medida de 3er lado: ');

if (l1 == l2 && l2 == l3){
    console.log('El triangulo es EQUILATERO (tres lados iguales)');
}else{
    if (l1 == l2 || l1 == l3 || l2==l3){
        console.log('El triangulo es ISÓSCELES (dos lados iguales y uno diferente)');
    }else{
        console.log('El triangulo es ESCALENO (los tres lados diferentes)');
    }
}