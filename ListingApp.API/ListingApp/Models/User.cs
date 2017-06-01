using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ListingApp.Models
{
    public class User
    {
        public int UserId { get; set; }
        public string UserName { get; set; }
        public int ZipCode { get; set; }
        public string PhoneNumber { get; set; }
        public DateTime Birthdate { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Product>  Products { get; set; }
        public virtual ICollection<Favorite> Favorites { get; set; }
        public virtual ICollection<Message> Messages { get; set; }
    }
}