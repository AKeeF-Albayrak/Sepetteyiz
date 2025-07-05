using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Products
{
    public class Tag : BaseEntity
    {
        public string Name { get; set; }

        public ICollection<ProductTag> ProductTags { get; set; }
    }
}
