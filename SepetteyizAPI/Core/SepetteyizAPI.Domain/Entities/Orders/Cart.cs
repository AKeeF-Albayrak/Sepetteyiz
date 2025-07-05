using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Orders
{
    public class Cart : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public ICollection<CartItem> Items { get; set; }
    }

}
