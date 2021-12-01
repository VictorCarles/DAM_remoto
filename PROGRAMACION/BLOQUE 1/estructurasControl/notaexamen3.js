
var readlineSync = require('readline-sync');

let nota = readlineSync.questionInt('Dime la nota que has sacado: ');
let tipoNota = "";

if ( nota >= 0 && nota <= 10){
    if ( nota <= 5) {
        tipoNota="baja";
    }
    if ( nota > 5 && nota <= 7) {
        tipoNota="media";
    }
    if ( nota > 7) {
        tipoNota="alta";
    }
    console.log ("Tu nota es una nota ", +tipoNota)
}else{
    console.log ("La nota no es valida");
}

// Segunda version

if ( nota >= 0 && nota <= 10){
    if ( nota < 5) {
        tipoNota="baja";
    }else{ 
        if ( nota < 7) {
            tipoNota="media";
        }else{
            tipoNota="alta";
        }
    }
    console.log ("Tu nota es una nota ", +tipoNota)
}else{
    console.log ("La nota no es valida");
}
