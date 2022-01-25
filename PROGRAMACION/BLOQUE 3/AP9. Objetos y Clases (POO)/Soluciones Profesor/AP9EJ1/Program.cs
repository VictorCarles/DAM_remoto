using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AP9EJ1
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("\n Información del primer socio: ");
            Console.WriteLine(" =============================\n");
            Socio s1 = new Socio();
            s1.Informa();

            Console.WriteLine("\n {0} tiene un peso {1}", s1.Nombre, s1.CalcularIMC());

            if (s1.EsMayorDeEdad())
            {
                Console.WriteLine(" {0} es mayor de edad",s1.Nombre);
            } else
            {
                Console.WriteLine(" {0} es menor de edad", s1.Nombre);
            }

            Console.ReadKey();

            Console.WriteLine("\n Información del segundo socio: ");
            Console.WriteLine(" =============================");
            Socio s2 = new Socio("Juan",30,'H',80.5,1.60);
            s2.Informa();

            Console.WriteLine("\n {0} tiene un peso {1}", s2.Nombre, s2.CalcularIMC());

            if (s2.EsMayorDeEdad())
            {
                Console.WriteLine(" {0} es mayor de edad", s2.Nombre);
            }
            else
            {
                Console.WriteLine(" {0} es menor de edad", s2.Nombre);
            }
            
            Console.ReadKey();

        }
    }
}
