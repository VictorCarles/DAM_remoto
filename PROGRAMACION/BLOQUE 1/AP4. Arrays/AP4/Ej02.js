// Ejercicio 2. Crea un array con 10 posiciones con numeros pedido spor teclado
// Visualiza el indice y el valor correspondiente. Usa dos funciones, una para rellenar los valores,
// y otra para mostrar sus elementos.

// Funciones.
function rellenaVector(arr){
    for(let i = 0; i< arr.length; i++ ){
        arr[i] = readlineSync.questionInt("Dime el valor para guardar en posicion "+i+": ");
    }
}
function mostrarElemento(arr){
    for(let i = 0; i< arr.length; i++ ){
        console.log("Valor:",apolñrr[i],", Indice:",i);
    }
}

// Principal
var readlineSync = require('readline-sync');
let numeros = new Array(10);

rellenaVector(numeros);
mostrarElemento(numeros);
