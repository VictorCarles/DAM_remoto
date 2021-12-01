var readlineSync = require('readline-sync');

let num = readlineSync.questionInt('Introduce un número para calcular si es multiplo de 10: ');

//Math.sign(num) == -1
if (num%1 != 0 || num<0) {
    console.log("El número no es valido, debe ser positivo y entero.");
}else{
    if (num%10==0){
        console.log("El número "+num+", SI es multiplo del 10.");
    }else{
        console.log("El número "+num+", NO es multiplo del 10.");
    }
}
