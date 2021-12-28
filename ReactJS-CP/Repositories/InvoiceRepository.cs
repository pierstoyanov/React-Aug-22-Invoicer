using Microsoft.EntityFrameworkCore;
using ReactJS_CP.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactJS_CP.Repositories
{
    public class InvoiceRepository : IInvoiceRepository
    {
        private readonly DataContext _context;
        
        public InvoiceRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<Invoice> Create(Invoice invoice)
        {
            _context.Invoices.Add(invoice);
            await _context.SaveChangesAsync();

            return invoice;
        }

        public async Task Delete(int id)
        {
            var InvoiceToDelete= await _context.Invoices.FindAsync(id);
            _context.Invoices.Remove(InvoiceToDelete);
            await _context.SaveChangesAsync();
        }

        public async Task<IEnumerable<Invoice>> Get()
        {
            return await _context.Invoices.ToListAsync();
        }

        public async Task<Invoice> Get(int id)
        {
            return await _context.Invoices.FindAsync(id);
        }

        public async Task Update(Invoice invoice)
        {
            _context.Entry(invoice).State = EntityState.Modified;
            await _context.SaveChangesAsync();
        }
    }
}
