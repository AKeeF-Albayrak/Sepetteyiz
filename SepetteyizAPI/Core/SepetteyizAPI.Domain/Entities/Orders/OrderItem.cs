using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Stores;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Orders
{
    public class OrderItem : BaseEntity
    {
        public Guid OrderId { get; set; }
        public Order Order { get; set; }

        public Guid SellerProductId { get; set; }
        public SellerProduct SellerProduct { get; set; }

        public int Quantity { get; set; }
        public decimal UnitPrice { get; set; }
        public decimal TotalPrice { get; set; }

        public Return Return { get; set; }
    }

}
