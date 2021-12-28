using ReactJS_CP.Models;
using ReactJS_CP.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactJS_CP.Repositories
{
    public interface IMaterialRepository
    {
        Task<IEnumerable<Material>> Get();
        Task<Material> Get(int id);
        Task<Material> Create(Material item);
        Task Update(Material item);
        Task Delete(int id);
    }
}