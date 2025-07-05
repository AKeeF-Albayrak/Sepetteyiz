using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities
{
    public class Message : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public string Sender { get; set; } // "user" or "agent"
        public string Content { get; set; }
    }

}
