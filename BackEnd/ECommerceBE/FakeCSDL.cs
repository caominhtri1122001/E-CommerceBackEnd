/// aloala
/// dsadsada

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
        public List<Products> listPro { get; set; }
        public List<Category> listCat { get; set; }


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
            listCat = new List<Category>();
            listPro = new List<Products>();

            //Roles
            Roles r1 = new Roles();
            r1.roleID = 1;
            r1.roleName = "Administator";
            listRole.Add(r1);

            Roles r2 = new Roles();
            r2.roleID = 2;
            r2.roleName = "Customer";
            listRole.Add(r2);

            //Users
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

            //Categories
            Category cat1 = new Category();
            cat1.catID = 1;
            cat1.catName = "Clothes";
            listCat.Add(cat1);

            Category cat2 = new Category();
            cat2.catID = 2;
            cat2.catName = "Shoes";
            listCat.Add(cat2);

            //Products
            Products pro1 = new Products();
            pro1.proID = 1;
            pro1.proName = "Air Jordan 1 Low";
            pro1.proBrand = "Nike";
            pro1.proOrigin = "VietNam";
            pro1.proOldPrice = 1200000;
            pro1.proPrice = 800000;
            pro1.proDescription = "Nike Air Jordan 1 Low ";
            pro1.status = 1;
            pro1.catID = 2;
            listPro.Add(pro1);

            Products pro2 = new Products();
            pro2.proID = 2;
            pro2.proName = "Air Jordan 1 High";
            pro2.proBrand = "Nike";
            pro2.proOrigin = "VietNam";
            pro2.proOldPrice = 1500000;
            pro2.proPrice = 900000;
            pro2.proDescription = "Nike Air Jordan 1 High ";
            pro2.status = 1;
            pro2.catID = 2;
            listPro.Add(pro2);

            Products pro3 = new Products();
            pro3.proID = 1;
            pro3.proName = "Men's Graphic T-Shirts";
            pro3.proBrand = "Nike";
            pro3.proOrigin = "VietNam";
            pro3.proOldPrice = 800000;
            pro3.proPrice = 450000;
            pro3.proDescription = "Men's Graphic T-Shirts ";
            pro3.status = 1;
            pro3.catID = 1;
            listPro.Add(pro3);
        }
    }
}
