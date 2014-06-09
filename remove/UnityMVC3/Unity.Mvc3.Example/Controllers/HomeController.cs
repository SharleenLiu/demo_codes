using System.Web.Mvc;
using Unity.Mvc3.Example.Models;

namespace Unity.Mvc3.Example.Controllers
{
    public class HomeController : Controller
    {
        private readonly IUpperCaseService _upperCaseService;
        private readonly ILowerCaseService _lowerCaseService;

        public HomeController(IUpperCaseService upperCaseService, ILowerCaseService lowerCaseService)
        {
            _upperCaseService = upperCaseService;
            _lowerCaseService = lowerCaseService;
        }

        public ActionResult Index()
        {
            ViewBag.Message1 = _upperCaseService.GetMessage();

            ViewBag.Message2 = _lowerCaseService.GetMessage();

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = _upperCaseService.GetMessage();

            return View();
        }
    }
}
