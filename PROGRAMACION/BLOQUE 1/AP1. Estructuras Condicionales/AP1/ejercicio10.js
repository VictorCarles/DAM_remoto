
const capacidadCD = 700;  // Constante con la capacidad en MB de un CD.
let numCD;
let readlineSync = require('readline-sync');
let capacidadHD = readlineSync.question('Introduce la capacidad del HD (en Gb): ');

if (capacidadHD <= 0) 
    // No se admiten capacidades negativas
    console.log('Capacidad de HD no valida');
else {
    // Calculo la capacidad del HD en Megabytes.
    capacidadHD = capacidadHD * 1024;
    console.log('La capacidad del HD es de',capacidadHD,'MB.');

    // Calculo los CDs necesarios.
    // Total de la capacidad del HD en Mb dividido entre la capacidad de un CD en Mb
    numCD = capacidadHD / capacidadCD;
    // redondeo al sigiuente entero. Hago uso de Math, su función trunc (parte entera) y le sumo 1.
    numCD = Math.trunc(numCD)+1;  
    console.log('Son necesarios',numCD,'CDs para realizar el Backup');
}