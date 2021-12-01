let salarioBruto = 1200;
let porcenImpuesto = 0.31;

let cantImpuestos, salarioNeto; // Aquí declaro las variables

cantImpuestos = salarioBruto * porcenImpuesto;
salarioNeto = salarioBruto - cantImpuestos;
console.log("Salario Bruto: ", salarioBruto);
console.log("Porcentaje de impuestos: ", porcenImpuesto);
console.log("Cantidad en impuestos: ", cantImpuestos);
console.log("Salario Neto: ", salarioNeto);

// Uso de varibles de tipo string

let nombre="Salva";
let apellido1 = "Gutierrez";
let apellido2 = "López";

let nombreCompleto = nombre +" "+ apellido1 +" "+ apellido2;

console.log("Te llamas " + nombreCompleto);

// Uso de variables booleanas

let casado = false;
console.log("Estado civil: "+casado);

// Cuestiones adicionales

let a = "10";
let b = "20";
console.log(a + b);
