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
    public class MaterialController : ControllerBase
    {
        public readonly IMaterialRepository materialRepository;

        public MaterialController(IMaterialRepository materialRepository)
        {
            this.materialRepository = materialRepository;
        }

        [HttpGet]
        public async Task<IEnumerable<Material>> GetMaterial()
        {
            /*This will convert Invoice to JSON before retruning it to caller*/
            return await this.materialRepository.Get();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Material>> GetMaterial(int id)
        {
            return await this.materialRepository.Get(id);
        }

        [HttpPost]
        public async Task<ActionResult> PostMaterial([FromBody] Material item)
        {
            /*Convert json to invoice object*/
            var newItem = await this.materialRepository.Create(item);
            return CreatedAtAction(nameof(GetMaterial), new { id = newItem.Id });
        }

        [HttpPut]
        public async Task<ActionResult> UpdateMaterial(int id, [FromBody] Material item)
        {
            if (id != item.Id)
            {
                /* check if url id == payload id*/
                return BadRequest();
            }

            await this.materialRepository.Update(item);
            return NoContent();
        }

        [HttpDelete]
        public async Task<ActionResult> DeleteMaterial(int id)
        {
            var itemToDelete = await this.materialRepository.Get(id);
            if (itemToDelete == null)
                return NotFound();

            await this.materialRepository.Delete(id);
            return NoContent();
        }
    }
}