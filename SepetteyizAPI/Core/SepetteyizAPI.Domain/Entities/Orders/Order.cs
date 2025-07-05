using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Payments;
using SepetteyizAPI.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Orders
{
    public class Order : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public Guid AddressId { get; set; }
        public Address Address { get; set; }

        public decimal TotalAmount { get; set; }
        public OrderStatus Status { get; set; }
        public DateTime? PaidAt { get; set; }

        public ICollection<OrderItem> Items { get; set; }
        public Payment Payment { get; set; }
    }

}
