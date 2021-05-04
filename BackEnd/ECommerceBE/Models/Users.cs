using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceBE.Models
{
    public class Users
    {
        public int userID { get; set; }
        public string userName { get; set; }
        public string userAccName { get; set; }
        public string userPass { get; set; }
        public string userPhone { get; set; }
        public string userAddress { get; set; }
        public int userRoleID { get; set; }
        public string urlAvatar { get; set; }
    }
}
