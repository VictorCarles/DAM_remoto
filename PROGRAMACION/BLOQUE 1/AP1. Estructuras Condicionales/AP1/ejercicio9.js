var readlineSync = require('readline-sync');

let dividendo = readlineSync.question('Introduce el primer número: ');
let divisor = readlineSync.question('Introduce el segundo número: ');

if (divisor == 0){
    console.log("El divisor no puede ser igual a 0.");
}else{
    let resultado = dividendo / divisor;
    console.log("El resultado es: ", resultado);
}