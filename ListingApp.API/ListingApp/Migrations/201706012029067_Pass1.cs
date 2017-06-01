namespace ListingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Pass1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        CategoryId = c.Int(nullable: false, identity: true),
                        PropertyId = c.Int(nullable: false),
                        CategoryDescription = c.String(),
                        Product_ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.CategoryId)
                .ForeignKey("dbo.Products", t => t.Product_ProductId, cascadeDelete: true)
                .Index(t => t.Product_ProductId);
            
            CreateTable(
                "dbo.Products",
                c => new
                    {
                        ProductId = c.Int(nullable: false, identity: true),
                        CategoryId = c.Int(nullable: false),
                        ProductDescription = c.String(),
                        Price = c.Decimal(nullable: false, precision: 18, scale: 2),
                        User_UserId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.ProductId)
                .ForeignKey("dbo.Users", t => t.User_UserId, cascadeDelete: true)
                .Index(t => t.User_UserId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        UserId = c.Int(nullable: false, identity: true),
                        IsSeller = c.Boolean(nullable: false),
                        UserName = c.String(),
                        ZipCode = c.Int(nullable: false),
                        PhoneNumber = c.String(),
                        Birthdate = c.DateTime(nullable: false),
                        Password = c.String(),
                        Email = c.String(),
                    })
                .PrimaryKey(t => t.UserId);
            
            CreateTable(
                "dbo.Favorites",
                c => new
                    {
                        FavoriteId = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        ProductsId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.FavoriteId)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: true)
                .Index(t => t.UserId);
            
            CreateTable(
                "dbo.Messages",
                c => new
                    {
                        MessageId = c.Int(nullable: false, identity: true),
                        User_UserId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.MessageId)
                .ForeignKey("dbo.Users", t => t.User_UserId, cascadeDelete: true)
                .Index(t => t.User_UserId);
            
            CreateTable(
                "dbo.MessageHistories",
                c => new
                    {
                        MessageHistoryId = c.Int(nullable: false, identity: true),
                        Subject = c.String(),
                        MessageText = c.String(),
                        DateCreated = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.MessageHistoryId);
            
            CreateTable(
                "dbo.MessageHistoryTable",
                c => new
                    {
                        MessageId = c.Int(nullable: false),
                        MessageHistoriesId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.MessageId, t.MessageHistoriesId })
                .ForeignKey("dbo.Messages", t => t.MessageId, cascadeDelete: true)
                .ForeignKey("dbo.MessageHistories", t => t.MessageHistoriesId, cascadeDelete: true)
                .Index(t => t.MessageId)
                .Index(t => t.MessageHistoriesId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Categories", "Product_ProductId", "dbo.Products");
            DropForeignKey("dbo.Products", "User_UserId", "dbo.Users");
            DropForeignKey("dbo.Messages", "User_UserId", "dbo.Users");
            DropForeignKey("dbo.MessageHistoryTable", "MessageHistoriesId", "dbo.MessageHistories");
            DropForeignKey("dbo.MessageHistoryTable", "MessageId", "dbo.Messages");
            DropForeignKey("dbo.Favorites", "UserId", "dbo.Users");
            DropIndex("dbo.MessageHistoryTable", new[] { "MessageHistoriesId" });
            DropIndex("dbo.MessageHistoryTable", new[] { "MessageId" });
            DropIndex("dbo.Messages", new[] { "User_UserId" });
            DropIndex("dbo.Favorites", new[] { "UserId" });
            DropIndex("dbo.Products", new[] { "User_UserId" });
            DropIndex("dbo.Categories", new[] { "Product_ProductId" });
            DropTable("dbo.MessageHistoryTable");
            DropTable("dbo.MessageHistories");
            DropTable("dbo.Messages");
            DropTable("dbo.Favorites");
            DropTable("dbo.Users");
            DropTable("dbo.Products");
            DropTable("dbo.Categories");
        }
    }
}
