using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ListingApp.Models
{
    public class Message
    {
        public int MessageId { get; set; }

        public virtual ICollection<MessageHistory> MessageHistories { get; set; }
        public virtual User User { get; set; }

    }
}