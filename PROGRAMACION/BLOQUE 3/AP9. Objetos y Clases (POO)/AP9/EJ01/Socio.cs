using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EJ01
{
    class Socio
    {
        // Atributos de la clase

        private string nombre;
        private int edad;
        private char nif;
        private char sexo;
        private double peso;
        private double altura;

        // Constructor que recibe parametros.
        public Socio(string nom, int edad, char nif, char sex, double pes, double alt)
        {
            this.nombre = nom;
            this.edad = edad;
            this.nif = nif;
            this.sexo = sex;
            this.peso = pes;
            this.altura = alt;
        }

        // Constructor sobrecargado que pide datos.
        public Socio()
        {
            this.nombre = pideInfo("Introduce el nombre del Socio: ").ToUpper();
            this.edad = int.Parse(pideInfo("Introduce la edad del Socio: "));
            this.nif = char.Parse(pideInfo("Introduce el NIF del Socio: "));
            this.sexo = char.Parse(pideInfo("Introduce el sexo del Socio (H-hombre/M-mujer): "));
            this.peso = double.Parse(pideInfo("Introduce el peso del Socio(kg): "));
            this.altura = double.Parse(pideInfo("Introduce la altura del Socio (metros): "));
        }
        
        public string pideInfo(string texto)
        {
            Console.WriteLine("" + texto);
            string temp = Console.ReadLine();
            return temp;
        }


        // Metodos Interfaz.

        public string CalcularIMC()
        {
            // IMC = peso en kg / (altura^2 en metros
            double pes = this.peso;
            double imc = pes / Math.Pow(this.altura, 2);
            if (imc >= 25)
                return "sobrepeso";
            else
                if (imc >= 18.5)
                    return "normal";
                else return "bajo";
        }

        public bool EsMayorDeEdad()
        {
            if (this.edad >= 18)
                return true;
            else
                return false;
        }

        public void Informa()
        {
            Console.WriteLine("Nombre: {0}\t DNI: {1}", this.nombre, this.nif);
            Console.WriteLine("Edad: {0}\t Sexo: {1}", this.edad, this.sexo);
            Console.WriteLine("Peso: {0}\t Altura: {1}", this.peso, this.altura);
        }

        public char GeneraNIF()
        {
            // https //docs.microsoft.com/es-es/dotnet/api/system.random?view=net-6.0
            // https //docs.microsoft.com/es-es/dotnet/api/system.random.nextbytes?view=net-6.0

            // El DNI son 8 numeros, y una letra.
            char dni = '0';
            string caracters = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
            var rand = new Random();
            for (int i = 0; i <= 7; i++)
            {
                int num = rand.Next(50, 101);
                
            }
            for (int ctr = 0; ctr <= 4; ctr++)
                Console.Write("{0,8:N0}", rand.Next(50, 101));
            return dni;
        }

    }
}
