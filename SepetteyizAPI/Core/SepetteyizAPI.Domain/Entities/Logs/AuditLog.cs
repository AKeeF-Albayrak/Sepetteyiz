using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Logs
{
    public class AuditLog : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public string Action { get; set; }
        public string TableName { get; set; }
        public Guid RecordId { get; set; }
        public DateTime Timestamp { get; set; }
    }

}
