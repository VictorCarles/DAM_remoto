/*
Ejercicio 1. Introduciendo el aó por teclado, calcula en que dia y mes cae el domingo de pascua.
*/
var readlineSync = require('readline-sync');
let a, b, c, d, e, n, dia;

let anyo = readlineSync.question("Dame el año para saber el domingo de pascua: ");

// Ejecutamos el algoritmo para calcular el dia
a = anyo % 19;
b = anyo % 4;
c = anyo % 7;
d = (19* a + 24) % 30;
e = (2 * b + 4 * c + 6 * d + 5) % 7;
n = 22 + d + e;

if ( n <= 31 ){ // Si es menos o igual de 31, cae en marzo
    dia = n;
    console.log("El Domingo de Pascuo del año "+anyo+", caera el "+dia+", de Marzo.");
}else{
    if (n > 31 && n <= 61){ // Si es mayor de 31, caera en abril
        dia = n - 31; // Le restamos 31 a n, para sacar el numero de abril.
        console.log("El Domingo de Pascuo del año "+anyo+", caera el "+dia+", de Abril.");
    }
}


