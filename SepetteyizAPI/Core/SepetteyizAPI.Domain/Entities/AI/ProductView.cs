using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Products;
using SepetteyizAPI.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.AI
{
    public class ProductView : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public Guid ProductCatalogId { get; set; }
        public ProductCatalog ProductCatalog { get; set; }

        public DateTime ViewedAt { get; set; }
    }

}
