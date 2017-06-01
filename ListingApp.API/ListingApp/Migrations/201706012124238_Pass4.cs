namespace ListingApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Pass4 : DbMigration
    {
        public override void Up()
        {
            DropColumn("dbo.Users", "IsSeller");
        }
        
        public override void Down()
        {
            AddColumn("dbo.Users", "IsSeller", c => c.Boolean(nullable: false));
        }
    }
}
