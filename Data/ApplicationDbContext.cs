using Microsoft.EntityFrameworkCore;

namespace JanamApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext()
        {

        }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<JanamApi.Models.Output> Output { get; set; }

    }
}
