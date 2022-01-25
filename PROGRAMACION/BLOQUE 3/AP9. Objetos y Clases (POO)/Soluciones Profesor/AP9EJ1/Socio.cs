using System;

namespace AP9EJ1
{
    class Socio
    {
        // Atributos de la clase (información / Datos)
        private string nombre;
        private int edad;
        private string nif;
        private char sexo;
        private double peso;
        private double altura;


        // Propiedad para acceder al nombre del socio 
        public string Nombre { get { return nombre; } }

        // Constructores de la Clase
        public Socio(string pnombre, int pedad, char psexo, double ppeso, double paltura)
        {
            nombre = pnombre.ToUpper(); // Lo convierto a mayúsculas.
            edad = pedad;
            sexo = psexo;
            peso = ppeso;
            altura = paltura;
            nif = GeneraNIF();
        }
        
        public Socio()
        {
            Console.Write(" Introduce el nombre del Socio: ");
            nombre = Console.ReadLine().ToUpper();
            Console.Write(" Introduce la edad del Socio: ");
            edad = int.Parse(Console.ReadLine());
            Console.Write(" Introduce el sexo del Socio (H/M): ");
            sexo = char.Parse(Console.ReadLine());
            Console.Write(" Introduce el peso del Socio: ");
            peso = Convert.ToDouble(Console.ReadLine());
            Console.Write(" Introduce la altura del Socio: ");
            altura = Convert.ToDouble(Console.ReadLine());
            nif = GeneraNIF();
        }

        // Comportamiento de la clase (métodos y acciones que realiza).
        public string CalcularIMC()
        {
            double imc;
            imc = peso / Math.Pow(altura, 2);
            if (imc<18.5)
            {
                return "bajo";
            } else if (imc>25)
            {
                return "alto";
            } else
            {
                return "normal";
            }
        }

        public bool EsMayorDeEdad()
        {
            if(edad>=18)
            {
                return true;
            } else
            {
                return false;
            }
        }

        public void Informa()
        {
            Console.WriteLine();
            Console.WriteLine(" Nombre: {0}\t DNI: {1}", nombre,nif);
            Console.WriteLine(" Edad: {0}\t Sexo:{1}", edad, sexo);
            Console.WriteLine(" Peso: {0}\t Altura:{1}", peso, altura);
        }

        private string GeneraNIF()
        {
            Random num = new Random();
            string dni=""; int valorDni;
            int indice;
            const string tabla = "TRWAGMYFPDXBNJZSQVHLCKET";

            for (int i = 1; i <=8; i++)
            {
                dni += Convert.ToString(num.Next(10));
            }

            valorDni = Convert.ToInt32(dni);
            indice = valorDni % 23;
            dni = dni + tabla[indice]; // concateno la letra correspondiente a dni

            return dni;

        }
    }
}
