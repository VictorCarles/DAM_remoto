/* 
EJERCICIO 14. Desarrolla un programa que genere 10 fechas válidas (al azar) 
del actual año con el siguiente formato:

    Fecha 1: 23 de Marzo de 2018
    Fecha 2: 15 de Enero de 2018
    …
    Fecha 10: 23 de Diciembre de 2018

Una fecha será válida si el día indicado es correcto para el mes generado 
(por ejemplo, el “30 de Febrero” no es una fecha correcta), 
el mes está entre “Enero” y “Diciembre”, y el año es el 2018.
Piensa la lógica de programación más sencilla que se te ocurra para resolver el problema.
En tu programa debes utilizar al menos el siguiente array:
let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

*/


let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
            "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// Creo un array que tiene para cada mes el número máximo de días.
let diasMaximos = [31,29,31,30,31,30,31,31,30,31,30,31];

const anyo = 2018 // el año es constante siempre. No hace falta generarlo. 
let dia, mes;

for(let i=1;i<=10;i++) {  // realizo 10 veces.
    // genero el mes de forma aleatoria.
    mes = Math.trunc(Math.random()*12); // genero un número entre 0 y 11 (posición del mes).
                                        // meses[mes] será el nombre del mes.    
    // genero un número entre 1 y el número máximo de los días del mes correspondiente
    dia = Math.trunc(Math.random()*diasMaximos[mes] + 1);

    console.log(dia +' de ' + meses[mes] + ' de ' + anyo);
}

