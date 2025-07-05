using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string PasswordHash { get; set; }
        public User_Role Role { get; set; }

        public ICollection<StoreUser> StoreUsers { get; set; }
        public ICollection<Address> Addresses { get; set; }
        public ICollection<Cart> Carts { get; set; }
        public ICollection<Order> Orders { get; set; }
    }
}
