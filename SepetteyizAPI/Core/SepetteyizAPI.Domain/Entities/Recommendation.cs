using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities
{
    public class Recommendation : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public Guid ProductCatalogId { get; set; }
        public ProductCatalog ProductCatalog { get; set; }

        public string Source { get; set; } // e.g., "AI", "Manual"
    }
}
