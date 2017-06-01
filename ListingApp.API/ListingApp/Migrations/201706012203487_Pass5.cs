namespace ListingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Pass5 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Products", "User_UserId", "dbo.Users");
            DropIndex("dbo.Products", new[] { "User_UserId" });
            CreateTable(
                "dbo.UserProducts",
                c => new
                    {
                        User_UserId = c.Int(nullable: false),
                        Product_ProductId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.User_UserId, t.Product_ProductId })
                .ForeignKey("dbo.Users", t => t.User_UserId, cascadeDelete: true)
                .ForeignKey("dbo.Products", t => t.Product_ProductId, cascadeDelete: true)
                .Index(t => t.User_UserId)
                .Index(t => t.Product_ProductId);
            
            DropColumn("dbo.Products", "User_UserId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Products", "User_UserId", c => c.Int(nullable: false));
            DropForeignKey("dbo.UserProducts", "Product_ProductId", "dbo.Products");
            DropForeignKey("dbo.UserProducts", "User_UserId", "dbo.Users");
            DropIndex("dbo.UserProducts", new[] { "Product_ProductId" });
            DropIndex("dbo.UserProducts", new[] { "User_UserId" });
            DropTable("dbo.UserProducts");
            CreateIndex("dbo.Products", "User_UserId");
            AddForeignKey("dbo.Products", "User_UserId", "dbo.Users", "UserId", cascadeDelete: true);
        }
    }
}
