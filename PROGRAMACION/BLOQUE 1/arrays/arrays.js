let flores = ["margarita", "rosa", "azucena"];
let numeros = [23,56,78,100,56];
let cosas = [[1,4,3],34,"hola",true,null];

let valores = new Array(); // La forma de crear arrays en otros lenguajes como C#
// let valores = new Array(10); // Crea un nuevo array, llamado valores, con 10 posiciones
// let valores = new Array("hola","adios","hasta luego");

flores[flores.length] = "petunia";

for(let i=0; i<flores.length; i++){
    console.log(flores[i]);
}



/* flores[0] = "tulipán";
console.log(flores);
console.log(flores[1]); */