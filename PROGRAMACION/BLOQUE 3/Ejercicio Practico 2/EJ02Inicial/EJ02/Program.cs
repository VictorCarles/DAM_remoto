using System;
using System.Collections.Generic;

namespace EJ01
{
    class Program
    {
        static void Main(string[] args)
        {

            string nom;
            int edad;

            List<Persona> plantilla = new List<Persona>();


            // Uso de los constructores
            Console.Write("Dime un nombre: ");
            nom = Console.ReadLine();
            Console.Write("Dime la edad: ");
            edad = int.Parse(Console.ReadLine());

            Persona p1 = new Persona(nom, edad);
            plantilla.Add(p1);
            p1.VerInfo();
            // p1.setNombre("Andres");
            // p1.VerInfo();

            Console.ReadKey();

            // 2º Constructor

            Persona p2 = new Persona("Ana", 56, true);
            plantilla.Add(p2);
            p2.VerInfo();

            Console.ReadKey();

            // 3º Constructor

            Persona p3 = new Persona();
            plantilla.Add(p3);
            p3.VerInfo();

            Console.ReadKey();

            double promedio = 0;
            foreach (Persona p in plantilla)
            {
                promedio = promedio + p.getEdad();
            }
            Console.WriteLine("Promedio de edades: {0:N}", promedio / plantilla.Count);

            Console.ReadKey();


        }
    }
}
