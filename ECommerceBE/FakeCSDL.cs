using ECommerceBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceBE
{
    public class FakeCSDL
    {
        public  List<Roles> listRole { get; set; }
        public  List<Users> listUser { get; set; }

        private static FakeCSDL _instance;
        public static FakeCSDL Instance
        {
            get
            {
                if (_instance == null)
                    _instance = new FakeCSDL();
                return _instance;
            }
            private set
            {

            }
        }

        private FakeCSDL()
        {
            listRole = new List<Roles>();
            listUser = new List<Users>();

            Roles r1 = new Roles();
            r1.roleID = 1;
            r1.roleName = "Administator";
            listRole.Add(r1);

            Roles r2 = new Roles();
            r2.roleID = 2;
            r2.roleName = "Customer";
            listRole.Add(r2);

            Users u1 = new Users();
            u1.userID = 1;
            u1.userName = "Cao Minh Tri";
            u1.userAccName = "caominhtri";
            u1.userPass = "123456";
            u1.userPhone = "0349319314";
            u1.userRoleID = 1;
            listUser.Add(u1);

            Users u2 = new Users();
            u2.userID = 2;
            u2.userName = "Tri Minh Cao";
            u2.userAccName = "triminhcao";
            u2.userPass = "654321";
            u2.userPhone = "0337222577";
            u2.userRoleID = 2;
            listUser.Add(u2);
        }
    }
}
