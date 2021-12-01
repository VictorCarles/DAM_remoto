// Silicita edad 4 personas y muestra cuantos son mayores de edad, y cuantos son menores de edad

var readlineSync = require('readline-sync');

let edad = 0, menores = 0, mayores = 0;

for (let i=1; i<=4; i++){
    edad = readlineSync.questionInt("Dame la edad de la persona "+i+": ");
    if (edad>= 18) 
        mayores++;
    else
        menores++;
}

console.log ("Hay "+mayores+" mayores de edad. \nHay "+menores+" menores de edad.");