using System;

namespace EJ01
{
    class Persona
    {
        // Atributos (datos e informacion de la clase)
        // Declaración: <acceso> + <modificador> + <tipo> + nombre_del_atributo.

        private string nombre;
        private int edad;
        private bool jubilada;


        // Constructores de la Clase

        /* Primer constructor creado que recibe el nombre y la edad de la persona.
         * La información de jubilido/a la calcula en el constructor atendiendo a si 
         * tiene menos o más de 67 años */

        public Persona(string nombre, int edad)
        {
            this.nombre = nombre;
            if (edad < 0)
                this.edad = 0;
            else
                this.edad = edad;

            if (edad < 67)
                jubilada = false;
            else
                jubilada = true;

        }



        /* Segundo constructor creado que recibe el nombre y la edad de la persona.
         * La información de jubilado/a se le pasa como parámetro al igual que nombre y edad.
         * Este constructor sería adecuado para cuando una persona tiene más de 67 años y no
         * se ha jubilado, o por lo contrario, se ha jubilado de forma anticipada, es decir,
         * antes de los 67 años */

        public Persona(string nombre, int edad, bool jub)
        {
            this.nombre = nombre.ToUpper();
            this.edad = edad;
            this.jubilada = jub;
        }




        /* Tercer constructor creado que pide los datos de la persona por teclado
        * En este caso no recibe parámetros y sustituiría al constructor heredado
        * de la clase Object. 
        * El dato jubilada se pide por teclado y no se cálcula automáticamente a partir
        * de la edad suministrada */

        public Persona()
        {
            Console.Write("Petición de datos.");
            Console.WriteLine("==================");
            Console.Write("Nombre: ");
            this.nombre = Console.ReadLine().ToUpper();
            Console.Write("Edad: ");
            this.edad = int.Parse(Console.ReadLine());
            Console.Write("Jubilada (S/N): ");
            char respuesta = Console.ReadKey().KeyChar;
            if (respuesta == 's' || respuesta == 'S')
                this.jubilada = true;
            else
                this.jubilada = false;

        }





        // Comportamientos (métodos y acciones de la clase).
        // Declaración: <acceso> + <modificador> + <tipo_de_retorno> + 
        //      nombre_del_método(lista_de_parámetros_que_recibe -si recibe-).

        
        public void setNombre(string nom)
        {
            this.nombre = nom;
        }

        public int getEdad()
        {
            return edad;
        }

        public void VerInfo()
        {
            Console.WriteLine("\n{0} tiene {1} años. Jubilada: {2}", nombre, edad, jubilada);
        }


        // Método público que incrementa la edad
        public int Cumpleaños()
        {
            edad++;
            if (edad >= 67)
            {
                jubilada = true;
            } 
            return edad;
        }

    }
}
