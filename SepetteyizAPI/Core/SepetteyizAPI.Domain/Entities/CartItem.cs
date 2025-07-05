using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities
{
    public class CartItem : BaseEntity
    {
        public Guid CartId { get; set; }
        public Cart Cart { get; set; }

        public Guid SellerProductId { get; set; }
        public SellerProduct SellerProduct { get; set; }

        public int Quantity { get; set; }
    }
}
