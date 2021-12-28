using Microsoft.EntityFrameworkCore;
using ReactJS_CP.Data;
using ReactJS_CP.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactJS_CP.Repositories
{
    public class MaterialRepository : IMaterialRepository
    {
        private readonly ApplicationDbContext _context;
        
        public MaterialRepository(ApplicationDbContext context)
        {
            _context = context;
        }
        public async Task<Material> Create(Material item)
        {
            _context.Materials.Add(item);
            await _context.SaveChangesAsync();

            return item;
        }

        public async Task Delete(int id)
        {
            var itemToDelete= await _context.Materials.FindAsync(id);
            _context.Materials.Remove(itemToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Material>> Get()
        {
            return await _context.Materials.ToListAsync();
        }

        public async Task<Material> Get(int id)
        {
            return await _context.Materials.FindAsync(id);
        }

        public async Task Update(Material item)
        {
            _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
