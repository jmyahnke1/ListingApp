using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ListingApp.Models
{
    public class Product
    {
        public int ProductId { get; set; }
        public int CategoryId { get; set; }
        public string ProductDescription { get; set; }
        public decimal Price { get; set; }

        public virtual ICollection<User> Users { get; set; }
        public virtual ICollection<Category> Categories { get; set; }

    }
}