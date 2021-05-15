using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceBE.Models
{
    public class Orders
    {
        public int orderID { get; set; }
        public int proID { get; set; }
        public int userID { get; set; }
        public int proNum { get; set; }
        public DateTime orderCTime { get; set; }
        public int orderStatus { get; set; }
        public DateTime oderATime { get; set; }
    }

    public class OrdersFormUser
    {
        public int orderID { get; set; }
        public string proName { get; set; }
        public int proNum { get; set; }
        public double total { get; set; }
        public string orderCTime { get; set; }
        public string orderStatus { get; set; }
        public string oderATime { get; set; }
    }
}
