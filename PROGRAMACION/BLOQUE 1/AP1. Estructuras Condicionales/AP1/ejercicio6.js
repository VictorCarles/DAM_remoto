// Recibe la edad de 2 hermanos  muestra la edad del mayor y cuantos años de diferencia tiene con el  menor

var readlineSync = require('readline-sync');

let hermano1 = readlineSync.question('Dame la edad del hermano 1: ');
if (hermano1 <= 0) console.log("La edad es invalida, debe ser mayor de 0.");

let hermano2 = readlineSync.question('Dame la edad del hermano 2: ');
if (hermano2 <= 0) console.log("La edad es invalida, debe ser mayor de 0.");

if(hermano2 == hermano1){
    console.log("Los dos hermanos tienen la misma edad");
}else{
    if(hermano1 > hermano2){
        console.log("El hermano1 es mayor que e hermano2, por "+ (hermano1-hermano2) +" años.");
    }else{
        
        console.log("El hermano2 es mayor que e hermano1, por "+ (hermano2-hermano1) +" años.");
    }
}
