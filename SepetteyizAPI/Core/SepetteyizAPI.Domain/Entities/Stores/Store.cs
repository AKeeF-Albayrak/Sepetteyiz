using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Stores
{
    public class Store : BaseEntity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string TaxNumber { get; set; }
        public string LogoUrl { get; set; }

        public ICollection<StoreUser> StoreUsers { get; set; }
        public ICollection<SellerProduct> SellerProducts { get; set; }
    }

}
