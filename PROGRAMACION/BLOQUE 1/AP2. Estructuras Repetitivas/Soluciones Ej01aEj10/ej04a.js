/*
EJERCICIO 4. Programa que muestre los números múltiplos de 3 que existen entre el 1 y el 100.
*/

console.log('Numeros múltiplos de 3 entre 1 y 100');
// Recorro con la variable num todos los números entre 1 y 100
for (let num=1; num<=100; num++) {
    // compruebo si num es multiplo de 3
    if (num % 3 == 0) {
        // En caso de ser múltiplo de tres, lo visualizo por consola.
        console.log(num);
    }
}

// Una variante sería la siguiente:
// Recorrer todos números desde 3 hasta 100 realizando incrementos de 3 en 3.
// Es decir: 3, 6, 9, 12, ...., 96, 99. 
// No sería necesario comprobar si sin múltiplos. ES OTRA LÓGICA. El código sería:

/* for (let num=3; num<=100; num=num+3) {
        console.log(num);
    } */
