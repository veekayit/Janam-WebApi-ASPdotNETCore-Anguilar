using JanamApi.Data;
using JanamApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;


namespace JanamApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OutputsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public OutputsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Output>>> GetOutput([FromQuery] Input input)
        {


            string StoredProc = "exec Display_Client_Category_Analysis " +
                                "@FinYear = " + input.FinYear + "," +
                                "@FromDate = '" + input.FromDate + "'," +
                                "@ToDate= '" + input.ToDate + "'";

            var result = await _context.Output.FromSqlRaw(StoredProc).ToListAsync();

            return Ok(result);
        }

    }
}
