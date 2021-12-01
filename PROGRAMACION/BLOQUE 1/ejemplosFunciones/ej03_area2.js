
function calcularArea2(base, altura){
    let area = base * altura;
    return area;
}

function calcularArea1(base, altura){
    let area;
    area = base * altura;
    console.log ("El area es", area);
}


// Programa principal

let base = 30, altura = 23;
/* calcularArea1(base,altura);
calcularArea1(56, 6+8); */

calcularArea2(base, altura);
let area = calcularArea2(base, altura);
console.log("El area es ", area);