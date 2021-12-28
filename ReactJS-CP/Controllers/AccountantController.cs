using Microsoft.AspNetCore.Http;
using ReactJS_CP.Repositories;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ReactJS_CP.Models;

namespace ReactJS_CP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountantController : ControllerBase
    {
        public readonly IAccountantRepository accountantRepository;

        public AccountantController(IAccountantRepository accountantRepository)
        {
            this.accountantRepository = accountantRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Accountant>> GetAccountant()
        {
            /*This will convert Invoice to JSON before retruning it to caller*/
            return await this.accountantRepository.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Accountant>> GetAccountant(int id)
        {
            return await this.accountantRepository.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult> PostAccountant([FromBody] Accountant item)
        {
            /*Convert json to invoice object*/
            var newItem = await this.accountantRepository.Create(item);
            return CreatedAtAction(nameof(GetAccountant), new {id = newItem.Id});
        }

        [HttpPut]
        public async Task<ActionResult> UpdateInvoice(int id, [FromBody] Accountant item)
        {
            if (id != item.Id)
            {
                /* check if url id == payload id*/
                return BadRequest();
            }

            await this.accountantRepository.Update(item);
            return NoContent();
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteAccountant(int id)
        {
            var InvoiceToDelete = await this.accountantRepository.Get(id);
            if (InvoiceToDelete == null)
                return NotFound();

            await this.accountantRepository.Delete(id);
            return NoContent();
        }
    }
}
