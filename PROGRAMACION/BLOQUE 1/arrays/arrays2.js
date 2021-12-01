let readlineSync = require('readline-sync');
/* 
let flores = [];
for(let i=0; i<3; i++){
    flores[i] = readlineSync.question("Dame la flor " + i + ": ");
}
 */

let nombres = ["Salva","Juan", "Pedro", "Ana"];
let salarios = [1500, 1800, 1400, 2500];
// for normal.
for (let i=0; i<nombres.length; i++){
    console.log(nombres[i], "cobra", salarios[i], "Euros");
}

/* 
// for of, Elem recibe el contenido que hay en cada posicion del array
for(let elem of nombres){
    console.log(nombres);
}
 */

// for in, la variable te da el indice ede cada posicion
for(let indice in nombres){
    console.log(indice);
}