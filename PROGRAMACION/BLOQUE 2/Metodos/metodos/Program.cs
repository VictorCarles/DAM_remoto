using System;


namespace metodos
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new Random();
            for (int i=1; i<=6; i++)
            {
                int resultado = rnd.Next(1, 50);
                Console.WriteLine("El número aleatorio es {0}", resultado);
            }
            Console.ReadKey();
        }
    }
}
