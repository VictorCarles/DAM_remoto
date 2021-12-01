/*
Calcula los numeros amigos que hay entre 5000 y 1, 'y muestralos de forma decreciente.

Un numero es amigo cuando al sumar sus divisores entre el numero y el 1, nos da el numero.
El divisor propio positivo de un numero, debe dar resto 0.
*/

console.log("Los numeros amigos que aparecen del 5000 al 1 son: ");
//let num = 5000;
let sumaDivisores = 0;

for (let num = 5000; num >= 1; num--){
    for(let i = 1; i < num; i++){
        //console.log(i);
        let x = num % i;
        // Si i es divisor del numero, se los sumamos a divisor
        if(x == 0) sumaDivisores += i;
    }
    // si la suma de sus divisores propios positivos es igual al numero, este es un amigo.
    if(sumaDivisores == num) console.log("Numero amigo: "+ num);
    sumaDivisores = 0;
}
