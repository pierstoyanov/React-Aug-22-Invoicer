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
    public class CompanyController : ControllerBase
    {
        public readonly ICompanyRepository companyRepository;

        public CompanyController(ICompanyRepository companyRepository)
        {
            this.companyRepository = companyRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Company>> GetCompany()
        {
            /*This will convert Invoice to JSON before retruning it to caller*/
            return await this.companyRepository.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Company>> GetCompany(int id)
        {
            return await this.companyRepository.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult> PostMaterial([FromBody] Company item)
        {
            /*Convert json to invoice object*/
            var newItem = await this.companyRepository.Create(item);
            return CreatedAtAction(nameof(GetCompany), new {id = newItem.Id});
        }

        [HttpPut]
        public async Task<ActionResult> UpdateCompany(int id, [FromBody] Company item)
        {
            if (id != item.Id)
            {
                /* check if url id == payload id*/
                return BadRequest();
            }

            await this.companyRepository.Update(item);
            return NoContent();
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteCompany(int id)
        {
            var itemToDelete = await this.companyRepository.Get(id);
            if (itemToDelete == null)
                return NotFound();

            await this.companyRepository.Delete(id);
            return NoContent();
        }
    }
}
