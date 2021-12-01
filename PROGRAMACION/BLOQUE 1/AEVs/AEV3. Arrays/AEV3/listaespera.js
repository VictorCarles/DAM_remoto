// AEV3 - Arrays.

// Constantes y librerias.
const readlineSync = require('readline-sync');
const fs = require('fs');
//const { stringify } = require('querystring');

// Funciones.
// 1) Agregar nuevo cliente a la lista de espera
function agregarNuevoCliente (array){
    console.log("Añadiento a nuevo cliente a la lista.\n=====================================");
    let nom = readlineSync.question("Nombre del nuevo cliente: ");
    for(let cliente of array){
        if(cliente == nom.toUpperCase()){
            console.log("El cliente ya se encuentra en la lista.\nSu posición es: ", array.indexOf(nom.toUpperCase()));
        }else{
            array.push(nom.toUpperCase());
            console.log("\nEl cliente ha sido añadido a la lista");
        }
    }
    readlineSync.keyInPause("Pulse una tecla para volver al menu.");
}
// 2) Siguiente cliente ocupa mesa
function clienteOcupaMesa(array){
    console.log("El cliente: ", array.shift(),"ha ocupado su mesa, abandonando la espera.");
    console.log(array);
    
}
// 3) Borrar cliente impaciente
function borrarCliente(array){
    let name = readlineSync.question("Nombre del nuevo cliente: ");
    for(let i=0; i<array.lenght; i++){
        if(array[i] == name.toUpperCase()){
            array.splice(i,1);
            console.log("El cliente "+ name+", ha sido eliminado de la lista.");
        }else{
            console-log("El cliente no se encuentra en la lista")
        }
    }
    readlineSync.keyInPause("Pulse una tecla para volver al menu.");
}
// 4) Ver turno de cliente
function verTurnoCliente(){

}
// 5) Ver estado de la lista de espera
function verEstadoLista(){

}
// 6) Guardar la lista de espera
function guardarListaEspera(){

}
// 7) Recuperar la lista de espera
function recuperarListaEsèra(){

}

// Programa principal.
let opcion = 0;
let lista = new Array();

do{
    console.clear();
    console.log("LISTA ESPERA - Restaurante Florida's Hollywood");
    console.log("===============================================");
    console.log(" 1. Agregar nuevo clientea la lista.\n 2. Siguiente cliente ocupa mesa.");
    console.log(" 3. Borrar cliente impaciente.\n 4. Ver turno de cliente.\n 5. Ver estado de la lista de espera.");
    console.log(" 6. Guardar la lista de espera.\n 7. Recuperar la lista de espera.");    
    console.log(" 8. Salir del programa.");

    opcion = readlineSync.questionInt("Introduce opcion (1...8): ");
    //readlineSync.keyInPause();
    console.clear();

    switch(opcion){
        case 1:
            agregarNuevoCliente(lista);
            break;
            //readlineSync.keyInPause();
        case 2:
            clienteOcupaMesa(lista);
            break;
        case 3:
            borrarCliente(lista);
            break;
        case 4:

        case 5:
        case 6:
        case 7:
    }
    console.clear();

}while (opcion !=8);