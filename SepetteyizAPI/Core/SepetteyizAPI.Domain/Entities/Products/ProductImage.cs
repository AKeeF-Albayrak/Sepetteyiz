using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Products
{
    public class ProductImage : BaseEntity
    {
        public Guid ProductId { get; set; }
        public ProductCatalog Product { get; set; }

        public string ImageUrl { get; set; }
        public bool IsMain { get; set; }
    }

}
