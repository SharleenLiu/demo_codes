using System;
using System.IO;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Threading;
using System.Net;

namespace RL_Stirrup_Steel_Link2013.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        [ChildActionOnly]
        public MvcHtmlString Analytics()
        {
            //string serverName = "http://qa.svc.ralphlauren.com/Analytics.ashx"; //comment it when go live 
            string serverName = "http://svc.ralphlauren.com/Analytics.ashx";  //uncomment it when go live 

            //string analyticsRequest = string.Format("{0}?channel={1}&locale={2}", serverName, channel, locale);
            string analyticsRequest = string.Format("{0}?channel={1}&locale={2}", serverName, "RLWJ_EPK", "en_US");

            Uri objURI = new Uri(analyticsRequest);
            WebRequest objWebRequest = WebRequest.Create(objURI);
            WebResponse objWebResponse = objWebRequest.GetResponse();

            string strHTML;
            using (Stream objStream = objWebResponse.GetResponseStream())
            {
                using (StreamReader objStreamReader = new StreamReader(objStream))
                {
                    strHTML = objStreamReader.ReadToEnd();
                    //strHTML = strHTML.Replace("gsicrlusprdi2", "gsicrlusstgi2"); //comment it when go live                                  
                }
            }

            return MvcHtmlString.Create(strHTML);

        }
    }
}
