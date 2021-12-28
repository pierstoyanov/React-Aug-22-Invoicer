using Microsoft.EntityFrameworkCore;
using ReactJS_CP.Data;
using ReactJS_CP.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactJS_CP.Repositories
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly ApplicationDbContext _context;
        
        public CompanyRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<Company> Create(Company item)
        {
            _context.Companies.Add(item);
            await _context.SaveChangesAsync();

            return item;
        }

        public async Task Delete(int id)
        {
            var itemToDelete= await _context.Companies.FindAsync(id);
            _context.Companies.Remove(itemToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Company>> Get()
        {
            return await _context.Companies.ToListAsync();
        }

        public async Task<Company> Get(int id)
        {
            return await _context.Companies.FindAsync(id);
        }

        public async Task Update(Company item)
        {
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
