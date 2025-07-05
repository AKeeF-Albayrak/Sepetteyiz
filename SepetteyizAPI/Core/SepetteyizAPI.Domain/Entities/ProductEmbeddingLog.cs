using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities
{
    public class ProductEmbeddingLog : BaseEntity
    {
        public Guid ProductCatalogId { get; set; }
        public ProductCatalog ProductCatalog { get; set; }

        public string TextVector { get; set; } // JSON string, array, or vector string
        public string ImageVector { get; set; }
    }

}
