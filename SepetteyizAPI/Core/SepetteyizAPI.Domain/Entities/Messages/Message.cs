using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Messages
{
    public class Message : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public string Sender { get; set; } // "user" or "agent"
        public string Content { get; set; }
    }

}
