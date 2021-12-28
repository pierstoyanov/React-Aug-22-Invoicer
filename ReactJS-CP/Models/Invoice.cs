using System;
using System.Collections.Generic;

namespace ReactJS_CP.Models
{
    public class Invoice
    {
        public int Id { get; set; }
        public string InvoiceId { get; set; }
        public int Number { get; set; }
        public DateTime WhenCreated { get; set; }
        public int IssuerId { get; set; }
        public int ReceiverId { get; set; }
        //TODO ADD Invoice items
        public string MaterialsId { get; set; }
        public string MaterialsQuantity { get; set; }
        public string MaterialsPrices { get; set; }
        public int AccountantId { get; set; }

    }
}
