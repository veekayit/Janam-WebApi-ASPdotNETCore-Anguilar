using Microsoft.EntityFrameworkCore;

namespace JanamApi.Models
{
    [Keyless]
    public class Output
    {
        public string Client_Category_Name { get; set; }
        public string CurrencyName { get; set; }
        public double amount_dr { get; set; }
        public double YTD_Amount_dr { get; set; }
        public decimal Bill_Amount { get; set; }
        public decimal YTD_Bill_amount { get; set; }
        public double Unbilled_Amount { get; set; }
        public double YTD_Unbilled_Amount { get; set; }
        public decimal Exchange_Rate { get; set; }
    }
}
