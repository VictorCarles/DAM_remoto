using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EJ01
{
    class Program
    {
        static void Main(string[] args)
        {
            Socio soc1 = new Socio();

            soc1.Informa();
            soc1.CalcularIMC();
            soc1.EsMayorDeEdad();

            Console.ReadKey();

            Socio soc2 = new Socio("Rodrigo", 23, "8990651H", 'H', 78.5, 1.7);
            soc2.Informa();
            soc2.CalcularIMC();
            soc2.EsMayorDeEdad();

            Console.ReadKey();
        }
    }
}
