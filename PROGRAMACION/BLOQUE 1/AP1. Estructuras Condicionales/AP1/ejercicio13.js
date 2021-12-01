// Lee tres numeros enteros para H M y S, y calcula si la hora, los minutos, y los segundos son los correctos.

let readlineSync = require('readline-sync');

let H = readlineSync.question('Introduce la horas: ');
let M = readlineSync.question('Introduce los minutos: ');
let S = readlineSync.question('Introduce los segundos: ');

if (H < 0 || M < 0 || S <0){
    console.log("Uno de los valores es menor que cero. Es invalido");
}else{
    if (!(H<=24 && M<=59 && S<=59)){
        console.log("La hora no es una hora valida");
    }else{
        console.log("La hora es; ",H,":",M,":",S);
    }
}