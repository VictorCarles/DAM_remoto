// Muestra el sueldo promedio de 5 empleados
// Debe leer el sueldo  de cada empleado en euros y calcular promedio.
// Realiza una modificación posterior para que informe también del sueldo máximo de los 5.

var readlineSync = require('readline-sync');
let promedio = 0, sueldo, cantidadTotal = 0;

for (let i=1; i<=5; i++){
    sueldo= readlineSync.questionInt("Dime el sueldo nº", i,": ");
    cantidadTotal += sueldo;
}

promedio = cantidadTotal /5;
console.log("El sueldo promedio es", promedio, "Euros");