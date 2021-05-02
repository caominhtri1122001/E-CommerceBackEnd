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
            u1.userPass = "1";
            u1.userPhone = "0349319314";
            u1.userRoleID = 1;
            listUser.Add(u1);

            Users u2 = new Users();
            u2.userID = 2;
            u2.userName = "Truong Thi My Duyen";
            u2.userAccName = "truongthimyduyen";
            u2.userPass = "1";
            u2.userPhone = "000";
            u2.userRoleID = 1;
            listUser.Add(u2);

            Users u3 = new Users();
            u3.userID = 3;
            u3.userName = "Tran Anh Dung";
            u3.userAccName = "trananhdung";
            u3.userPass = "1";
            u3.userPhone = "000";
            u3.userRoleID = 1;
            listUser.Add(u3);

            Users u4 = new Users();
            u4.userID = 4;
            u4.userName = "Duong Truong Vu";
            u4.userAccName = "duongtruongvu";
            u4.userPass = "1";
            u4.userPhone = "000";
            u4.userRoleID = 1;
            listUser.Add(u4);

            //Categories
            Category cat1 = new Category();
            cat1.catID = 1;
            cat1.catName = "Clothes";
            listCat.Add(cat1);

            Category cat2 = new Category();
            cat2.catID = 2;
            cat2.catName = "Shoes";
            listCat.Add(cat2);

            Category cat3 = new Category();
            cat3.catID = 3;
            cat3.catName = "Sport Equipment";
            listCat.Add(cat2);

            Category cat4 = new Category();
            cat4.catID = 3;
            cat4.catName = "Ball";
            listCat.Add(cat4);

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
            pro1.ProLinkPicture = "https://khogiaythethao.vn/wp-content/uploads/2020/08/giay-nike-air-jordan-1-low-black-toe.jpg";
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
            pro2.ProLinkPicture = "https://khogiaythethao.vn/wp-content/uploads/2020/12/Jordan-1-Retro-High-Obsidian-UNC.jpg";
            listPro.Add(pro2);

            Products pro3 = new Products();
            pro3.proID = 3;
            pro3.proName = "Men's Graphic T-Shirts";
            pro3.proBrand = "Nike";
            pro3.proOrigin = "VietNam";
            pro3.proOldPrice = 800000;
            pro3.proPrice = 450000;
            pro3.proDescription = "Men's Graphic T-Shirts ";
            pro3.status = 1;
            pro3.catID = 1;
            pro3.ProLinkPicture = "https://my-test-11.slatic.net/p/d0196620fb3954f3b58a67ee4eb2b51b.jpg_720x720q80.jpg_.webp";
            listPro.Add(pro3);

            Products pro4 = new Products();
            pro4.proID = 4;
            pro4.proName = "Badminton Racket";
            pro4.proBrand = "ABC";
            pro4.proOrigin = "VietNam";
            pro4.proOldPrice = 240000;
            pro4.proPrice = 220000;
            pro4.proDescription = "Vợt cầu lông xịn";
            pro4.status = 1;
            pro4.catID = 3;
            pro4.ProLinkPicture = "https://luongsport.com/wp-content/uploads/2017/12/AX7_9909.png";
            listPro.Add(pro4);

            Products pro5 = new Products();
            pro5.proID = 5;
            pro5.proName = "Bóng đá Doflamingo";
            pro5.proBrand = "Doflamingo";
            pro5.proOrigin = "VietNam";
            pro5.proOldPrice = 450000;
            pro5.proPrice = 360000;
            pro5.proDescription = "Bóng xịn";
            pro5.status = 1;
            pro5.catID = 4;
            pro5.ProLinkPicture = "https://cf.shopee.vn/file/59df15783847b0d441b796f96f03bddd";
            listPro.Add(pro5);

            Products pro6 = new Products();
            pro6.proID = 6;
            pro6.proName = "Bóng chuyền Treecko";
            pro6.proBrand = "Treecko";
            pro6.proOrigin = "China";
            pro6.proOldPrice = 400000;
            pro6.proPrice = 350000;
            pro6.proDescription = "Bóng chuyền xịn";
            pro6.status = 1;
            pro6.catID = 4;
            pro6.ProLinkPicture = "http://www.buocnhayxitin.com/wp-content/uploads/2019/02/kich-thuoc-qua-bong-chuyen.jpg";
            listPro.Add(pro6);

            Products pro7 = new Products();
            pro7.proID = 7;
            pro7.proName = "Bóng rổ Hokage";
            pro7.proBrand = "Konoha";
            pro7.proOrigin = "Japan";
            pro7.proOldPrice = 480000;
            pro7.proPrice = 420000;
            pro7.proDescription = "Bóng rổ xịn";
            pro7.status = 1;
            pro7.catID = 4;
            pro7.ProLinkPicture = "https://sportonline.vn/wp-content/uploads/2017/12/qua-bong-ro-geru-star-s6.jpg";
            listPro.Add(pro7);

            Products pro8 = new Products();
            pro8.proID = 8;
            pro8.proName = "Tất thể thao";
            pro8.proBrand = "Nike";
            pro8.proOrigin = "VietNam";
            pro8.proOldPrice = 80000;
            pro8.proPrice = 45000;
            pro8.proDescription = "Tất xịn";
            pro8.status = 1;
            pro8.catID = 2;
            pro8.ProLinkPicture = "https://bizweb.dktcdn.net/100/294/198/products/cst-03-den-trang.jpg?v=1598371967460";
            listPro.Add(pro8);

            Products pro9 = new Products();
            pro9.proID = 9;
            pro9.proName = "Váy thể thao";
            pro9.proBrand = "noBrand";
            pro9.proOrigin = "VietNam";
            pro9.proOldPrice = 240000;
            pro9.proPrice = 180000;
            pro9.proDescription = "Váy đẹp";
            pro9.status = 1;
            pro9.catID = 2;
            pro9.ProLinkPicture = "https://cf.shopee.vn/file/77c48ecb08177b378c2dc54aa29906cd";
            listPro.Add(pro9);

            Products pro10 = new Products();
            pro10.proID = 10;
            pro10.proName = "Cần câu cá";
            pro10.proBrand = "Neki";
            pro10.proOrigin = "VietNam";
            pro10.proOldPrice = 800000;
            pro10.proPrice = 550000;
            pro10.proDescription = "Cần xịn";
            pro10.status = 1;
            pro10.catID = 3;
            pro10.ProLinkPicture = "https://baothainguyen.vn/UserFiles/image/cs(30).jpg";
            listPro.Add(pro10);

            Products pro11 = new Products();
            pro11.proID = 11;
            pro11.proName = "Bộ cờ vua";
            pro11.proBrand = "King";
            pro11.proOrigin = "VietNam";
            pro11.proOldPrice = 400000;
            pro11.proPrice = 320000;
            pro11.proDescription = "Bộ cờ vua đẹp";
            pro11.status = 1;
            pro11.catID = 3;
            pro11.ProLinkPicture = "https://bigshop.vn/media/product/1659_quan_co_nhat_ban_4.jpg";
            listPro.Add(pro11);

            Products pro12 = new Products();
            pro12.proID = 12;
            pro12.proName = "Chuột thể thao điện tử Logitech";
            pro12.proBrand = "Logitech";
            pro12.proOrigin = "VietNam";
            pro12.proOldPrice = 800000;
            pro12.proPrice = 750000;
            pro12.proDescription = "Chuột xịn";
            pro12.status = 1;
            pro12.catID = 3;
            pro12.ProLinkPicture = "https://phucanhcdn.com/media/product/35684_g304.jpg";
            listPro.Add(pro12);

        }
    }
}
