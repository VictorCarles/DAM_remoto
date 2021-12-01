// Haz un programa que te saque los números pares del uno al mil

let readlineSync = require('readline-sync');

let i;
let num=100;

for (i=1; i<=1000; i++){
    if (i%2 == 0) console.log(i);
    if (i == num) {
        console.log("\n =========== \n");
        num += 100;
    }
}

// Version ultra slim
/*
for (let numero=2; numero<=1000; numero+= 2){
    console.log(numero);
}*/