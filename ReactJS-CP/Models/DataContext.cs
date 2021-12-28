using Microsoft.EntityFrameworkCore;

namespace ReactJS_CP.Models
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options)
            :base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Accountant> Accountants { get; set; }
    }
}
