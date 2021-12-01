/*
AEV 2. Programa que calcule las coordenadas X (distancia) e Y (altura) en la trayectoria
de un proyectil a interalos de 0,1 segundos, a partir de datos suministrados por teclado.

Datos por teclado: velocidad, angulo (en radianes);

Aceleración: constante de 40 m/s2
Debe terminar cuando la coordenada de y sea <= 0. 
*/

// Funciones
function calculaCoordX (velocidad, angulo, tiempo){
    let x = velocidad * Math.cos(angulo) * tiempo;
    return x;
}
function calculaCoordY (velocidad, angulo, tiempo){
    let y = (velocidad * Math.sin(angulo) * tiempo) - ((40/2)*(t*t));
    return y;
}

// Constantes y Variables
var readlineSync = require('readline-sync');

let ang = readlineSync.questionFloat("Introduce el angulo inicial de tiro: ");
let vel = readlineSync.questionInt("Introduce la velocidad inicial del tiro: ");
let coordY = 0, coordX = 0;
let t = 0, yMax = 0;

// Programa
console.log("Tabla de lanzamiento para un tiro de inclinación: "+ang+" radianes, y velocidad: "+vel+" m/s");
console.log("Inicio de lanzamiento.");
console.log("========================");
console.log("TIEMPO POSICION_X POSICION_Y")
// Ejecutamos la repetitiva para calcular las coordenadas X e Y en el tiempo.
do{
    if( ang<0 || ang>(Math.PI/2) ){ // Comprobamos que el angulo es válido
        console.log("El angulo es demasiado incorrecto, debe estar entre 0 y PI/2.");
    }else{
        t += 0.10;
        coordX = calculaCoordX(vel,ang,t);
        coordY = calculaCoordY(vel,ang,t);

        // Guardamos altura máxima
        if (coordY > yMax) yMax = coordY;
        // Mostramos tiempo y coordenadas, mostrando solo 2 decimales.
        console.log(t.toFixed(2)+"\t"+coordX.toFixed(2)+"\t   "+coordY.toFixed(2));
    }
}while (coordY > 0)

console.log("Fin del lanzamiento\n========================");
console.log("Altura máxima: "+yMax.toFixed(2)+" --- Distancia maxima: "+coordX.toFixed(2));