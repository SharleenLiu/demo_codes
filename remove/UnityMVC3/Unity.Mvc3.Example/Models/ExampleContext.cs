using System;
using System.Diagnostics;

namespace Unity.Mvc3.Example.Models
{
    public class ExampleContext : IExampleContext, IDisposable
    {
        public ExampleContext()
        {
            Debug.WriteLine("ExampleContext Constructor");
        }

        public string GetMessage()
        {
            Debug.WriteLine("ExampleContext GetMessage");
            return "A message from the ExampleContext";
        }

        public void Dispose()
        {
            Debug.WriteLine("ExampleContext Dispose");
        }
    }
}