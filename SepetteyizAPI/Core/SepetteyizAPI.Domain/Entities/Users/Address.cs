﻿using SepetteyizAPI.Domain.Entities.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.Users
{
    public class Address : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public string Title { get; set; }
        public string AddressLine { get; set; }
        public string City { get; set; }
        public string District { get; set; }
        public string ZipCode { get; set; }
        public string Country { get; set; }
    }

}
