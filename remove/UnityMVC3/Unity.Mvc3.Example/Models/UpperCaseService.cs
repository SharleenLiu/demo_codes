namespace Unity.Mvc3.Example.Models
{
    public class UpperCaseService : IUpperCaseService
    {
        private readonly IExampleContext _context;

        public UpperCaseService(IExampleContext context)
        {
            _context = context;
        }

        public string GetMessage()
        {
            return _context.GetMessage().ToUpper();
        }
    }
}