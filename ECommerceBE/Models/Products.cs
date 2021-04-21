using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceBE.Models
{
    public class Products
    {
        public int proID { get; set; }
        public string proName { get; set; }
        public string proBrand { get; set; }
        public string proOrigin { get; set; }
        public double proPrice { get; set; }
        public string proDescription { get; set; }
        public int status { get; set; }
        public int catID { get; set; }
    }
}
