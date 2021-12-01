// DefiniciÃ³n de la clase Coche
class Coche {
    
    // funciÃ³n constructora (recibe la marca, el tipo y las puertas) para 
    // instaciar el objeto con dicha informaciÃ³n en sus propiedades
    constructor(marca, tipo, puertas) {
        this.marca = marca;
        this.tipo = tipo;
        this.puertas = puertas;
        this.fechaCreacion = 'hoy';
        this.enMarcha = false; // Al crearse el objeto, el coche esta apagado
        this.deposito = this.cargarInicio(); // El depÃ³sito tendrÃ¡ unos litros de combustible inicial
    }

    // calcula una carga inicial de combustible entre 5 y 10 litros (para ser asignada al atributo depÃ³sito).
    cargarInicio() {
        let carga = Math.trunc(Math.random()*5)+5;
        return carga;
    }

    // MÃ©todo que enciende el coche. Controla y verifica si ya estaba encendido
    encenderCoche() {
        if (this.enMarcha) {
            console.log('\nOJO!...El coche ya estÃ¡ encendido')
        } else {
            this.enMarcha = true;
            console.log('\nCoche en marcha!!!');
        }
    }

    // MÃ©todo que apaga el coche. Controla y verifica si estaba en marcha para apagarlo
    apagarCoche() {
        if (this.enMarcha) {
            this.enMarcha = false;  // apago el coche
            console.log('\nCoche apagado!!!')
        } else {
            console.log("\nOJO!...El coche ya estÃ¡ apagado");
        }
    }
 
    // MÃ©todo que se ejecuta cuando se realiza un viaje. Recibe en litros el combustible que se
    // gasta en dicho viaje.
    realizarViaje(gasto) {
        if (!this.enMarcha) { // si el coche estÃ¡ parado
             console.log("\nNO puedo moverme!!!. Estoy parado")   
        } else if (gasto>this.deposito) {  // Si el combustible necesario es mayor al existente en el depÃ³sito
                console.log("\nNo puedo realizar el viaje ---> Insuficiente combustible")   
            } else {  // Se realiza el viaje y se descuenta el combustible gastado en el depÃ³sito
                  this.deposito -= gasto;
                  console.log("\nViaje Realizado ---> Te quedan " + this.deposito);  
            }
    }

    // MÃ©todo que rellena el depÃ³sito de combustible con una cantidad de litros pasada como parÃ¡metro.
    // Se controla que no se exceda la capacidad del depÃ³sito (estimada en 100 litros) 
    echarCombustible(relleno) {
        if ((this.deposito+relleno) > 100) {
            console.log('\nCapacidad excedida')
        } else {
            this.deposito += relleno; 
            console.log('\nRellenado deposito. Carga actual: ' + this.deposito + ' litros');
        }    
    }

}

// Instanciamos un objeto de tipo Coche, haciendo uso de su constructor.
let c1 = new Coche('Seat','Ateca',5);
// Visualizamos la informaciÃ³n del objeto
console.log(c1); // El estado del objeto indica que el coche estÃ¡ apagado. Observa cuantos litros tiene el depÃ³sito.
// Echamos combustible al coche. Concretamente 50 litros.
c1.echarCombustible(50);
// Llamamos al mÃ©todo de encendido del coche
c1.encenderCoche(); // En este momento, el estado del objeto habrÃ¡ cambiado y el coche estarÃ¡ encendido
// Realizamos un viaje con un gasto de combustible de 30 litros
c1.realizarViaje(30);
// Visualizamos la informaciÃ³n de estado del objeto
console.log(c1);  // Observemos que el atributo deposito habrÃ¡ decrementado su valor tras el viaje en 30.
// Realizamos en nuevo viaje con un gasto de combustible de 40 litros.
c1.realizarViaje(40);  // nos indicarÃ¡ que no dispone de suficiente combustible para ello
console.log(c1); // Visualizamos nuevamente el estado del objeto.