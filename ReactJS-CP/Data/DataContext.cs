using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ReactJS_CP.IdentityAuth;
using ReactJS_CP.Models;

namespace ReactJS_CP.Data
{
    public class ApplicationDbContext 
        : IdentityDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            Database.EnsureCreated();
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

        public DbSet<Invoice> Invoices { get; set; }
        public DbSet<Material> Materials { get; set; }
        public DbSet<Company> Companies { get; set; }
        public DbSet<Accountant> Accountants { get; set; }
    }
}
