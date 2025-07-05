using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Products
{
    public class ProductTag
    {
        public Guid ProductCatalogId { get; set; }
        public ProductCatalog ProductCatalog { get; set; }

        public Guid TagId { get; set; }
        public Tag Tag { get; set; }
    }
}
