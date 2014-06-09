using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading;
using System.Globalization;
using Unity.Mvc3.Example.Models;
using Unity.Mvc3.Example.Helpers;

namespace Unity.Mvc3.Example.Controllers
{
    public class BaseController : Controller
    {
        private readonly IMarketCapture _IMarketCapture;

        //public BaseController() { }

        public BaseController(IMarketCapture ImarketCapture)
        {
            _IMarketCapture = ImarketCapture;
        }

        public ActionResult Index()
        {
            //var md = new MarketCapture();
            //md.Thanks = String.Empty;
            //return View(md);

            _IMarketCapture.Thanks = String.Empty;

            return View(_IMarketCapture);

        }

        [HttpPost]
        public virtual ActionResult Index(IMarketCapture collection)
        {
            try
            {
                string ct = RouteData.Values["controller"].ToString();
                switch (ct)
                {
                    case "Rugby":
                        collection.SiteNum = "RUG_RUELALA_FEB12";
                        break;
                    case "RLHome":
                        collection.SiteNum = "RLHOME";
                        break;
                    default:
                        collection.SiteNum = "test";
                        break;
                }

                collection.Thanks = MyResources.Resources.Savesuccessful;
                collection.Save();
                return View(collection);
            }
            catch
            {
                //var md = new MarketCapture();
                //md.Thanks = MyResources.Resources.ErrorMessage;
                //return View(md);

                _IMarketCapture.Thanks = MyResources.Resources.ErrorMessage;
                return View(_IMarketCapture);

            }
        }

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            string locale = (string)this.ControllerContext.RouteData.Values["locale"] ?? "en-US";

            GetLocaleInformation(locale);

            base.OnActionExecuting(filterContext);
        }

        private void GetLocaleInformation(string loc)
        {
            string culture = "en-US";
            this.Response.Cookies["culture"].Value = "en-US";
            this.Response.Cookies["culture"].Expires = DateTime.Now.AddDays(10);

            if (string.IsNullOrEmpty(loc))
            {
                if (Response.Cookies["culture"] == null)
                {
                    culture = "en-US";
                    RouteData.Values["locale"] = culture;
                }
                else
                {
                    culture = Response.Cookies["culture"].Value;
                }
            }
            else
            {
                culture = loc;
            }

            CultureInfo ci;
            try
            {
                ci = CultureInfo.GetCultureInfo(culture);
            }
            catch (CultureNotFoundException)
            {
                ci = new CultureInfo("en-US");
            }

            Thread.CurrentThread.CurrentCulture = ci;
            Thread.CurrentThread.CurrentUICulture = ci;

            //ViewData[Constants.LOCALEID] = ci.LCID; no need so far

        }
    }
}
