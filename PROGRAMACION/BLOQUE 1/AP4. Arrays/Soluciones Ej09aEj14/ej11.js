/* 
EJERCICIO 11. Desarrollar un programa en el que se pida al usuario un vector de 
10 números enteros (v) y se construya un nuevo vector (u) 
con los mismos elementos que (v) pero ordenados de menor a mayor. 
El programa ha de escribir en pantalla el nuevo vector donde aparezcan los elementos ordenados.
*/

let readlineSync = require('readline-sync');
let v = []; 
let u = [];  // Array para los elementos ordenados.
let menor, posMenor;

// introduzco los valores del vector.
for (let i=0;i<10;i++) {
    v[i] = readlineSync.questionInt('Elemento '+ (i+1) + ': ');
}

do {
    menor = v[0]; // inicialmente pongo como menor al primer elemento.
    posMenor = 0; // guardará la posición del elemento menor 
    for (let j=0; j<v.length;j++) {
        if (v[j]<menor) {
            posMenor = j;
        }
    }
    u.push(v[posMenor]);  // añado a u el nuevo menor encontrado.
    v.splice(posMenor,1); // elimino el elemento del array v
} while (v.length!=0); // mientras queden elementos en v
// visualizo en bruto el array u
console.log(u);



