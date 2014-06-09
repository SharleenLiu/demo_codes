using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace Unity.Mvc3.Example
{
    public class MvcApplication : HttpApplication
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }

        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapRoute(
                 "Default", // Route name
                 "{locale}/{controller}/{action}/{id}", // URL with parameters
                 new { locale = "en-US", controller = "Home", action = "Index", id = UrlParameter.Optional } // Parameter defaults
             );


        }

        protected void Application_Start()
        {
            RegisterGlobalFilters(GlobalFilters.Filters);
            RegisterRoutes(RouteTable.Routes);

            Bootstrapper.Initialise();
        }
    }
}