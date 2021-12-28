using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ReactJS_CP.Models;

namespace ReactJS_CP.Data
{
    public class ReactJS_CPContext : DbContext
    {
        public ReactJS_CPContext (DbContextOptions<ReactJS_CPContext> options)
            : base(options)
        {
        }

        public DbSet<ReactJS_CP.Models.Accountant> Accountant { get; set; }
    }
}
