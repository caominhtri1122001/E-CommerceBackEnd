using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceBE.Models
{
    public class Roles
    {
        int roleID { get; set; }
        string roleName { get; set; }
    }
    public class BaseRespone
    {
        public bool Success { get; set; }
        public Object Data { get; set; }
    }
}
