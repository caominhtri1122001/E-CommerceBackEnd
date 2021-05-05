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
        public double proOldPrice { get; set; }
        public double proPrice { get; set; }
        public string proDescription { get; set; }
        public int status { get; set; }
        public int catID { get; set; }
        public string ProLinkPicture { get; set; }
        public string ProLinkPicture1 { get; set; }
        public string ProLinkPicture2 { get; set; }
        public string ProLinkPicture3 { get; set; }
        public int NumberOfSold { get; set; }
    }
}
