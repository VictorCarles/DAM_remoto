using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Aplicacion
{
    class Program
    {
        static void Main(string[] args)
        {
            int a, b, resultado;

            Console.WriteLine("Dame el primer número: ");
            a = int.Parse(Console.ReadLine());
            Console.WriteLine("Dame el segundo número: ");
            b = int.Parse(Console.ReadLine());

            resultado = a + b;

            Console.WriteLine("El resultado es " + resultado);
            Console.ReadKey();
        }

        static int Suma(int num1, int num2)
        {
            return num1 + num2;
        }
    }
}
