using ReactJS_CP.Models;
using ReactJS_CP.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactJS_CP.Repositories
{
    public interface IAccountantRepository
    {
        Task<IEnumerable<Accountant>> Get();
        Task<Accountant> Get(int id);
        Task<Accountant> Create(Accountant accountant);
        Task Update(Accountant accountant);
        Task Delete(int id);
    }
}
