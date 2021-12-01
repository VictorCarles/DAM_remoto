/*
Demuestra la conjetura de Colatz y calcula la sucesion de numeros a partir del numero entero positivo dado por teclado.
Debe acabar en 1.
Si el numero dado es 1, no se calculara.
*/

var readlineSync = require('readline-sync');

let num = readlineSync.questionInt("Introduce un numero entero positivo para calcular la sucesion: ");

// Si el numero es de valor negativo, avisamos y volvemos a pedirlo hasta que el valor sea positivo.
while(num<0){
    console.log("El numero es de valor negativo. No es valido.")
    num = readlineSync.questionInt("Introduce un numero entero POSITIVO para calcular la sucesion: ");
}
// Si el numero es 1, acabamos. Si es mayor de 1, comprobamos la conjetura.
while (num > 1){
    console.log(num); // Muestro el numero al principio, para ver la sucesion al completo)
    if(num % 2 == 0){ // Es par: lo divido entre 2.
        num = num / 2;
    }else{ // Es impar: multiplico por 3 y sumo 1
        num = (num*3)+1;
    }
}
console.log(num); // Muestro el 1. Para cerrar la sucesion