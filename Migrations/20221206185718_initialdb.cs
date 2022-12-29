using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JanamApi.Migrations
{
    public partial class initialdb : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Output",
                columns: table => new
                {
                    Client_Category_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CurrencyName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    amount_dr = table.Column<double>(type: "float", nullable: false),
                    YTD_Amount_dr = table.Column<double>(type: "float", nullable: false),
                    Bill_Amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    YTD_Bill_amount = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Unbilled_Amount = table.Column<double>(type: "float", nullable: false),
                    YTD_Unbilled_Amount = table.Column<double>(type: "float", nullable: false),
                    Exchange_Rate = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Output");
        }
    }
}
