using ListingApp.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace ListingApp.Infrastructure
{
    public class ListingAppDataContext : DbContext
    {
        public ListingAppDataContext() : base("ListingAppDB")
        {

        }

        public DbSet<Message> Messages { get; set; }

        public DbSet<MessageHistory> MessageHistories { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Message>()
                .HasMany<MessageHistory>(m => m.MessageHistories)
                .WithMany(ms => ms.Messages)
                .Map(mms =>
                {
                    mms.MapLeftKey("MessageId");
                    mms.MapRightKey("MessageHistoriesId");
                    mms.ToTable("MessageHistoryTable");
                });

            modelBuilder.Entity<User>()
                .HasMany<Product>(p => p.Products)
                .WithMany(u => u.Users);

            modelBuilder.Entity<Favorite>()
                .HasRequired<User>(u => u.User)
                .WithMany(f => f.Favorites);

            modelBuilder.Entity<Product>()
                //.HasOptional<Product>(p => p.Product)
                .HasMany(c => c.Categories)
                .WithMany(p => p.Products);

            modelBuilder.Entity<Message>()
                .HasRequired<User>(u => u.User)
                .WithMany(m => m.Messages);

            base.OnModelCreating(modelBuilder);
        }

        public System.Data.Entity.DbSet<ListingApp.Models.Category> Categories { get; set; }

        public System.Data.Entity.DbSet<ListingApp.Models.Favorite> Favorites { get; set; }

        public System.Data.Entity.DbSet<ListingApp.Models.Product> Products { get; set; }

        public System.Data.Entity.DbSet<ListingApp.Models.User> Users { get; set; }

      }
}