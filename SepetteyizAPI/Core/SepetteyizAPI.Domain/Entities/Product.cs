using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities
{
    public class Product : BaseEntity
    {
        public string Name { get; set; }
        public string  Description { get; set; }
        public float Price { get; set; }
        public int Stock { get; set; }
        public string ImageFileId { get; set; }
        public Guid SellerId { get; set; }
    }
}
