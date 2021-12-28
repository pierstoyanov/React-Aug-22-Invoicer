using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ReactJS_CP.Data;

namespace ReactJS_CP.Models
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountantController : ControllerBase
    {
        private readonly ReactJS_CPContext _context;

        public AccountantController(ReactJS_CPContext context)
        {
            _context = context;
        }

        // GET: api/Accountant
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Accountant>>> GetAccountant()
        {
            return await _context.Accountant.ToListAsync();
        }

        // GET: api/Accountant/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Accountant>> GetAccountant(int id)
        {
            var accountant = await _context.Accountant.FindAsync(id);

            if (accountant == null)
            {
                return NotFound();
            }

            return accountant;
        }

        // PUT: api/Accountant/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAccountant(int id, Accountant accountant)
        {
            if (id != accountant.Id)
            {
                return BadRequest();
            }

            _context.Entry(accountant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AccountantExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Accountant
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Accountant>> PostAccountant(Accountant accountant)
        {
            _context.Accountant.Add(accountant);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAccountant", new { id = accountant.Id }, accountant);
        }

        // DELETE: api/Accountant/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAccountant(int id)
        {
            var accountant = await _context.Accountant.FindAsync(id);
            if (accountant == null)
            {
                return NotFound();
            }

            _context.Accountant.Remove(accountant);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AccountantExists(int id)
        {
            return _context.Accountant.Any(e => e.Id == id);
        }
    }
}
