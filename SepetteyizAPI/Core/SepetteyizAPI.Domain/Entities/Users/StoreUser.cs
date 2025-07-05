using SepetteyizAPI.Domain.Entities.Stores;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Users
{
    public class StoreUser
    {
        public Guid StoreId { get; set; }
        public Store Store { get; set; }

        public Guid UserId { get; set; }
        public User User { get; set; }

        public StoreUser_Role Role { get; set; }
        public DateTime AddedAt { get; set; }
    }
}
