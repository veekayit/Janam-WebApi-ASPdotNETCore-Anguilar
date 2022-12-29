
using Microsoft.EntityFrameworkCore;

namespace JanamApi.Models
{
    [Keyless]
    public class Input
    {
        public int FinYear { get; set; }

        public string FromDate { get; set; }

        public string ToDate { get; set; }
    }
}
