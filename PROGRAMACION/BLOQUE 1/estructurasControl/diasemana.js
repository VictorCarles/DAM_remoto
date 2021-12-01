var readlineSync = require('readline-sync');

let diaSemana = readlineSync.question('Dime el nombre del día: ');
diaSemana = diaSemana.toLowerCase();

switch (diaSemana) {
    case "lunes":
        console.log("Eres el día 1");
        break;
    case "martes":
        console.log("Eres el día 2");
        break;
    case "miercoles":
        console.log("Eres el día 3");
        break;
    case "jueves":
        console.log("Eres el día 4");
        break;
    case "viernes":
        console.log("Eres el día 5");
        break;
    case "sabado":
        console.log("Eres el día 6");
        break;
    case "domingo":
        console.log("Eres el día 7");
        break;
    default:
        console.log("No eres un día de la semana");
}