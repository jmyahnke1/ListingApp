using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ListingApp.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        //public int PropertyId { get; set; }
        public string CategoryDescription { get; set; }

        public virtual ICollection<Product> Products { get; set; }
    }
}