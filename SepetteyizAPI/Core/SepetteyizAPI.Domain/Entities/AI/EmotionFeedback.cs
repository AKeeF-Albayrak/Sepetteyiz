using SepetteyizAPI.Domain.Entities.Common;
using SepetteyizAPI.Domain.Entities.Products;
using SepetteyizAPI.Domain.Entities.Users;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SepetteyizAPI.Domain.Entities.AI
{
    public class EmotionFeedback : BaseEntity
    {
        public Guid UserId { get; set; }
        public User User { get; set; }

        public Guid ProductCatalogId { get; set; }
        public ProductCatalog ProductCatalog { get; set; }

        public int Score { get; set; } // 1–5
        public string FeedbackText { get; set; }
    }

}
