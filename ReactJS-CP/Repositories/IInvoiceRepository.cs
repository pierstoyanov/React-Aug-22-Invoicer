using ReactJS_CP.Models;
using ReactJS_CP.Data;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ReactJS_CP.Repositories
{
    public interface IInvoiceRepository
    {
        Task<IEnumerable<Invoice>> Get();
        Task<Invoice> Get(int id);
        Task<Invoice> Create(Invoice invoice);
        Task Update(Invoice invoice);
        Task Delete(int id);
    }
}