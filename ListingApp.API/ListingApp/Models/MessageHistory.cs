using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ListingApp.Models
{
    public class MessageHistory
    {
        public int MessageHistoryId { get; set; }
        public string Subject { get; set; }
        public string MessageText { get; set; }
        public DateTime DateCreated { get; set; }

        public virtual ICollection<Message> Messages { get; set; }
    }
}