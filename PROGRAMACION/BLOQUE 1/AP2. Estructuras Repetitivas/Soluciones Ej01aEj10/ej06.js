/*
EJERCICIO 6. 
Programa que muestre los términos de la siguiente serie (1, 3, 7, 15, 31, …) que sean menores de 1000.
En este ejercicio hay que detectar que la serie sigue la siguente regla: n = (n-1)*2 + 1
*/

let numero = 1;

console.log('\nPrimera forma de hacerlo (con while):')

while (numero < 1000) {
  // muestro el numero
  console.log(numero);
  // calculo el siguiente número de la serie
  numero = (numero * 2) + 1;
}

/* OTRA ALTERNATIVA DE SOLUCIÓN:
    Utilizando el for - No es muy normal utilizar esta con el incremento especificado.
    Pero es totalmente válida y al fin y al cabo más sencilla y rápida que la LOGICA anterior.
*/
console.log("\nSegunda forma de hacerlo (con for):")
for (numero=1; numero<1000; numero = (numero*2)+1) {
  console.log(numero);
}
