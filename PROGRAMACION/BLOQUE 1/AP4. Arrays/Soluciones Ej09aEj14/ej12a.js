/* 
EJERCICIO 12. Escribir un programa que simule el lanzamiento de dos dados. 
Haz uso de la función Math.random para obtener números aleatorios entre 1 y 6 
para cada uno de los lanzamientos de los dos dados. 
Debes sumar el resultado de lanzar los dos dados en cada “tirada” y 
anotar en un array el número de apariciones de dicha suma, 
repitiendo 36.000 veces esta operación. 
Los resultados de cada tirada estarán entre el valor 2 y el 12. 
¿Cuántas veces ha salido cada valor? ¿Qué porcentaje representa respecto al total?
*/

let dado1, dado2, tirada;
let combinacion = [];  // defino el array de combinaciones.
// inicializo a cero los elementos desde la posicion 2 a la 12
for(let i=2;i<=12;i++) {
    combinacion[i]=0;
}

for(let tiro=1; tiro<=36000; tiro++) {  // Realizo 36000 veces.
    dado1 = Math.trunc((Math.random()*6)+1); // Primer numero aleatorio entre 1 y 6
    dado2 = Math.trunc((Math.random()*6)+1); // Segundo numero aleatorio entre 1 y 6
    tirada = dado1 + dado2;
    combinacion[tirada]++;
}

// visualización de resultados
for(let j=2;j<=12;j++) {
    console.log('El valor ' + j + ' ha salido ' + combinacion[j] + ' veces.');
}