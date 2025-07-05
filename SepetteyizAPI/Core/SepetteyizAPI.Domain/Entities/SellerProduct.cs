using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities
{
    public class SellerProduct : BaseEntity
    {
        public Guid StoreId { get; set; }
        public Store Store { get; set; }

        public Guid ProductCatalogId { get; set; }
        public ProductCatalog ProductCatalog { get; set; }

        public decimal Price { get; set; }
        public int Stock { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }

        public ICollection<CartItem> CartItems { get; set; }
        public ICollection<OrderItem> OrderItems { get; set; }
    }

}
