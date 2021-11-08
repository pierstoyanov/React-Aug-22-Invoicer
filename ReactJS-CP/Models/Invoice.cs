using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactJS_CP.Models
{
    public class Invoice
    {
        public int InvoiceId { get; set; }
        public int Number { get; set; }
        public DateTime WhenCreated { get; set; }
        public int IssuerId { get; set; }
        public int ReceiverId { get; set; }
        //TODO ADD Invoice items
        public int AccountantId { get; set; }
        public Accountant Accountant { get; set; }
    }
}
