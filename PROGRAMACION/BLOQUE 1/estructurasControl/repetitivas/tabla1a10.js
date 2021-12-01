// Tabla del 1 al 10 utilizando for

let i, j;
let readlineSync = require('readline-sync');

for (i=1; i<=10; i++){
    console.log("\nTabla del",i);
    console.log("===========");
    for (j=1; j<=10; j++){
        console.log(i, "x", j,"=",i*j);
        // console.log(i + " x " + j + " = " + i * j);
    }
    readlineSync.keyInPause();
}

// Tablas del 1 al 10 utilizando while

i = 1;
while (i<=10){
    // la tabla del i
    console.log("\nTabla del",i);
    console.log("===========");
    j = 1;
    while (j<=10){
        console.log(i, "x", j,"=",i*j);
        // i * j
        j++;
    }
    i++;
    readlineSync.keyInPause();
}

// Tablas del 1 al 10 utilizando do...while

i=1;
do{
    j=1;
    do {   
        console.log(i, "x", j,"=",i*j);
        j++;
    } while (j<=10);
    i++
    readlineSync.keyInPause();
    
}while (i <= 10);