let radio = 30;
// area es = a PI * radio al cuadrado
const PI = 3.14159;
// let area = PI * (radio * radio);
let area = Math.PI * Math.pow(radio,2);
let perimetro = 2 * PI * radio;

console.log("Circulo de radio: ", radio);
console.log("Area: ", Math.trunc(area,2));
console.log("Perímetro: ", perimetro);

