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
    public class InvoicesController : ControllerBase
    {
        public readonly IInvoiceRepository invoiceRepository;

        public InvoicesController(IInvoiceRepository invoiceRepository)
        {
            this.invoiceRepository = invoiceRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Invoice>> GetInvoice()
        {
            /*This will convert Invoice to JSON before retruning it to caller*/
            return await this.invoiceRepository.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice>> GetInvoice(int id)
        {
            return await this.invoiceRepository.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult> PostInvoice([FromBody] Invoice invoice)
        {
            /*Convert json to invoice object*/
            var newInvoice = await this.invoiceRepository.Create(invoice);
            return CreatedAtAction(nameof(GetInvoice), new {id = newInvoice.Id});
        }

        [HttpPut]
        public async Task<ActionResult> UpdateInvoice(int id, [FromBody] Invoice invoice)
        {
            if (id != invoice.Id)
            {
                /* check if url id == payload id*/
                return BadRequest();
            }

            await this.invoiceRepository.Update(invoice);
            return NoContent();
        }

        public async Task<ActionResult> Delete(int id)
        {
            var InvoiceToDelete = await this.invoiceRepository.Get(id);
            if (InvoiceToDelete == null)
                return NotFound();

            await this.invoiceRepository.Delete(id);
            return NoContent();
        }
    }
}
