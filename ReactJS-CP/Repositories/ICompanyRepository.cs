using ReactJS_CP.Models;
using ReactJS_CP.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactJS_CP.Repositories
{
    public interface ICompanyRepository
    {
        Task<IEnumerable<Company>> Get();
        Task<Company> Get(int id);
        Task<Company> Create(Company item);
        Task Update(Company item);
        Task Delete(int id);
    }
}