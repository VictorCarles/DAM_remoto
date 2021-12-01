// Programa que muestro los primeros 50 multiplos del 3, empezando por el 1.

let i= 1;
let multiplos = 1;

while (multiplos < 51){
    if (i % 3 == 0){
        console.log("Es multiplo numero "+multiplos+" del 3, es el :",i);
        multiplos++;
    }
    i++;
}
