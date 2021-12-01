//
var readlineSync = require('readline-sync');

let nota = readlineSync.questionInt('Dime la nota que has sacado: ');
let rangoNota = "";

if (nota < 0 || nota > 10){
    console.log("La nota introducida no és válida. Debe estar entre 0 y 10");
}else{
    if (nota < 5) rangoNota = "Insuficiente";
    if (nota >=5 && nota<6) rangoNota="Suficiente";
    if (nota >=6 && nota<7) rangoNota = "Bien";
    if (nota >=7 && nota < 9) rangoNota="Notable";
    if (nota >=9 ) rangoNota="Sobresaliente";
    console.log("Tiene un "+rangoNota);
}

// Version 2

if (nota < 0 || nota > 10){
    console.log("La nota introducida no és válida. Debe estar entre 0 y 10");
}else{
    if (nota < 5){
        rangoNota = "Insuficiente";
    }else{
        if(nota <6) {
            rangoNota="Suficiente";
        }else{
            if ( nota <7){
                rangoNota = "Bien";
            }else{
                if (nota <9){
                    rangoNota="Notable";
                }else{
                    rangoNota="Sobresaliente";
                }
            }
        }
    }
    console.log("Tiene un "+rangoNota);
}