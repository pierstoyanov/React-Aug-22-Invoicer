using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJS_CP.Models
{
    public class InvoiceContext : DbContext
    {
        public InvoiceContext(DbContextOptions<InvoiceContext> options)
            :base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Invoice> Invoices { get; set; }
    }
}
