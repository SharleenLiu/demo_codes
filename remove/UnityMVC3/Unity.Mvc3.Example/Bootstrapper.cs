using System.Web.Mvc;
using Microsoft.Practices.Unity;
using Unity.Mvc3.Example.Models;


namespace Unity.Mvc3.Example
{
    public static class Bootstrapper
    {
        public static void Initialise()
        {
            var container = BuildUnityContainer();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }

        private static IUnityContainer BuildUnityContainer()
        {
            var container = new UnityContainer();

            container.RegisterType<IUpperCaseService, UpperCaseService>();
            container.RegisterType<ILowerCaseService, LowerCaseService>();
            container.RegisterType<IExampleContext, ExampleContext>(new HierarchicalLifetimeManager());
            container.RegisterType<IMarketCapture, MarketCapture>(new HierarchicalLifetimeManager());
            container.RegisterControllers();

            return container;
        }
    }
}