namespace Unity.Mvc3.Example.Models
{
    public class LowerCaseService : ILowerCaseService
    {
        private readonly IExampleContext _context;

        public LowerCaseService(IExampleContext context)
        {
            _context = context;
        }

        public string GetMessage()
        {
            return _context.GetMessage().ToLower();
        }
    }
}