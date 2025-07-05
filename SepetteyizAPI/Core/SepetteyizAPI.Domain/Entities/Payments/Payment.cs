using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Orders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Payments
{
    public class Payment : BaseEntity
    {
        public Guid OrderId { get; set; }
        public Order Order { get; set; }

        public string Method { get; set; }
        public string Provider { get; set; }
        public decimal Amount { get; set; }
        public string TransactionId { get; set; }
        public string Status { get; set; }
        public DateTime PaidAt { get; set; }
    }

}
