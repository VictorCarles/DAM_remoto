// Modificación realizada sobre el ejercicio1.js para que informe también del sueldo máximo de los 5.

var readlineSync = require('readline-sync');
let promedio = 0, sueldo, cantidadTotal = 0, sueldoMaximo = 0;

for (let i=1; i<=5; i++){
    sueldo= readlineSync.questionInt("Dime el sueldo nº "+i+": ");
    cantidadTotal += sueldo;
    if (sueldo > sueldoMaximo)
        sueldoMaximo = sueldo;
}

promedio = cantidadTotal /5;
console.log("El sueldo promedio es: " + promedio + " Euros");
console.log("El sueldo máximo es: " + sueldoMaximo);