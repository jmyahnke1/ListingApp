namespace ListingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Pass2 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Categories", "Product_ProductId", "dbo.Products");
            DropIndex("dbo.Categories", new[] { "Product_ProductId" });
            AlterColumn("dbo.Categories", "Product_ProductId", c => c.Int());
            CreateIndex("dbo.Categories", "Product_ProductId");
            AddForeignKey("dbo.Categories", "Product_ProductId", "dbo.Products", "ProductId");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Categories", "Product_ProductId", "dbo.Products");
            DropIndex("dbo.Categories", new[] { "Product_ProductId" });
            AlterColumn("dbo.Categories", "Product_ProductId", c => c.Int(nullable: false));
            CreateIndex("dbo.Categories", "Product_ProductId");
            AddForeignKey("dbo.Categories", "Product_ProductId", "dbo.Products", "ProductId", cascadeDelete: true);
        }
    }
}
