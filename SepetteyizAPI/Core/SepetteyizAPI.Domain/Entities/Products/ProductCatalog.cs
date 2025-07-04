﻿using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Stores;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Products
{
    public class ProductCatalog : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int CategoryId { get; set; }
        public Category Category { get; set; }

        public ICollection<ProductImage> ProductImages { get; set; }
        public ICollection<SellerProduct> SellerProducts { get; set; }
        public ICollection<ProductTag> ProductTags { get; set; }
    }

}
