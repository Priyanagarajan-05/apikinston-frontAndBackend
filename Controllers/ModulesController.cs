using KinstonBackend.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace KinstonBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ModulesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public ModulesController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult AddModule([FromBody] Module module)
        {
            if (module == null)
                return BadRequest("Module details are required.");

            _context.Modules.Add(module);
            _context.SaveChanges();

            return CreatedAtAction(nameof(GetModules), new { id = module.ModuleId }, module);
        }
    }
}
