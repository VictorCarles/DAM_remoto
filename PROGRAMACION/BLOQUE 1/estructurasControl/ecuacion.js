
var readlineSync = require('readline-sync');
let x1, x2, discriminante;
// ax2 + bx + c = 0;

let a = readlineSync.questionInt("Dame el valor de a: ");
let b = readlineSync.questionInt("Dame el valor de b: ");
let c = readlineSync.questionInt("Dame el valor de c: ");

discriminante = b**2 - 4*a*c;

if (discriminante >=0){
    x1 = (-b - Math.sqrt(discriminante)) / (2*a);
    x2 = (-b + Math.sqrt(discriminante)) / (2*a);
    console.log("Las soluciones a esta ecuacion, son estas, x1: "+x1+", x2: "+x2);
}else{
    console.log("Esa expresion no tiene solución real.");
}



