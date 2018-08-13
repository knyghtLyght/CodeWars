using System;
using System.Collections.Generic;

namespace TripleTrouble
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("117317730, 558333623");
            Console.WriteLine(TripleDouble(117317730, 558333623));
            Console.ReadLine();
        }

        public static int TripleDouble(long num1, long num2)
        {
            string firstInput = num1.ToString();
            string secondInput = num2.ToString();
            int ansCount = 0;
            HashSet<char> testSet = new HashSet<char>();
            for (int i = 0; i < firstInput.Length-2; i++)
            {
                if (firstInput[i] == firstInput[i+1] && firstInput[i] == firstInput[i+2])
                {
                    testSet.Add(firstInput[i]);
                }
            }
            for (int k = 0; k < secondInput.Length-1; k++)
                {
                    if (secondInput[k] == secondInput[k+1])
                    {
                        if (testSet.Contains(secondInput[k]))
                        {
                            ansCount++;
                        }
                    }
                }
            return ansCount;
        }
    }
}
