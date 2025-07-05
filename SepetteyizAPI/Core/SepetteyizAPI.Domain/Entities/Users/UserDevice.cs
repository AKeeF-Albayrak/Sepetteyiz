using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Users
{
    public class UserDevice : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public string DeviceInfo { get; set; }
        public string IpAddress { get; set; }
        public DateTime LastUsedAt { get; set; }
    }

}
