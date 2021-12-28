using Microsoft.EntityFrameworkCore;
using ReactJS_CP.Data;
using ReactJS_CP.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactJS_CP.Repositories
{
    public class AccountantRepository : IAccountantRepository
    {
        private readonly ApplicationDbContext _context;
        
        public AccountantRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<Accountant> Create(Accountant item)
        {
            _context.Accountants.Add(item);
            await _context.SaveChangesAsync();

            return item;
        }

        public async Task Delete(int id)
        {
            var itemToDelete= await _context.Invoices.FindAsync(id);
            _context.Invoices.Remove(itemToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Accountant>> Get()
        {
            return await _context.Accountants.ToListAsync();
        }

        public async Task<Accountant> Get(int id)
        {
            return await _context.Accountants.FindAsync(id);
        }

        public async Task Update(Accountant item)
        {
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
