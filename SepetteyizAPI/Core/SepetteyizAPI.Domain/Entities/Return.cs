using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities
{
    public class Return
    {
        public Guid OrderItemId { get; set; }
        public OrderItem OrderItem { get; set; }

        public string Reason { get; set; }
        public string Status { get; set; }
        public DateTime RequestedAt { get; set; }
        public DateTime? ResolvedAt { get; set; }
    }

}
