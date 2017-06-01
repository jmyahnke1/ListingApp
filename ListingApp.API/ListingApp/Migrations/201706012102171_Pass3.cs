namespace ListingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Pass3 : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Categories", "Product_ProductId", "dbo.Products");
            DropIndex("dbo.Categories", new[] { "Product_ProductId" });
            CreateTable(
                "dbo.ProductCategories",
                c => new
                    {
                        Product_ProductId = c.Int(nullable: false),
                        Category_CategoryId = c.Int(nullable: false),
                    })
                .PrimaryKey(t => new { t.Product_ProductId, t.Category_CategoryId })
                .ForeignKey("dbo.Products", t => t.Product_ProductId, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.Category_CategoryId, cascadeDelete: true)
                .Index(t => t.Product_ProductId)
                .Index(t => t.Category_CategoryId);
            
            DropColumn("dbo.Categories", "PropertyId");
            DropColumn("dbo.Categories", "Product_ProductId");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Categories", "Product_ProductId", c => c.Int());
            AddColumn("dbo.Categories", "PropertyId", c => c.Int(nullable: false));
            DropForeignKey("dbo.ProductCategories", "Category_CategoryId", "dbo.Categories");
            DropForeignKey("dbo.ProductCategories", "Product_ProductId", "dbo.Products");
            DropIndex("dbo.ProductCategories", new[] { "Category_CategoryId" });
            DropIndex("dbo.ProductCategories", new[] { "Product_ProductId" });
            DropTable("dbo.ProductCategories");
            CreateIndex("dbo.Categories", "Product_ProductId");
            AddForeignKey("dbo.Categories", "Product_ProductId", "dbo.Products", "ProductId");
        }
    }
}
