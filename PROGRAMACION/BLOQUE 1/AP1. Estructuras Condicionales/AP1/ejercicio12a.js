// Programa que calcula el mayor de tres números. Antes de esto debe comprobar que estos números no son iguales.

let readlineSync = require('readline-sync');
let num1 = readlineSync.question('Introduce el primer numero: ');
let num2 = readlineSync.question('Introduce el segundo numero: ');
let num3 = readlineSync.question('Introduce el tercer numero: ');


if (num1 == num2 || num2 == num3 || num3 == num1){
    console.log("Numeros invalidos. Los valores de dos de los numeros suministrados son iguales. Introduce numeros distintos.")
}else{
    if (num1 >= num2 && num1 >= num3){
        console.log('El numero mayor es',num1);
    }
    else {
        if (num2 >= num3){
            console.log('El numero mayor es',num2);
        }else{
            console.log('El numero mayor es',num3);
        }
    }
}

