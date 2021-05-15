using ECommerceBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ECommerceBE
{
    public class FakeCSDL
    {
        public  List<Users> listUser { get; set; }
        public List<Products> listPro { get; set; }
        public List<Category> listCat { get; set; }
        public List<Orders> listOrd { get; set; }


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
            listUser = new List<Users>();
            listCat = new List<Category>();
            listPro = new List<Products>();
            listOrd = new List<Orders>();


            //Users
            Users u1 = new Users();
            u1.userID = 1;
            u1.userName = "Cao Minh Tri";
            u1.userAccName = "caominhtri";
            u1.userPass = "1";
            u1.userPhone = "0349319314";
            u1.isAdmin = true;
            u1.urlAvatar = "https://thuthuatnhanh.com/wp-content/uploads/2019/04/anh-cute-buon.jpg";
            listUser.Add(u1);

            Users u2 = new Users();
            u2.userID = 2;
            u2.userName = "Truong Thi My Duyen";
            u2.userAccName = "truongthimyduyen";
            u2.userPass = "1";
            u2.userPhone = "000";
            u2.isAdmin = true;
            u2.urlAvatar = "https://i.pinimg.com/originals/f3/0a/04/f30a04f09d78d6b0dfdf0bf0255c5487.jpg";
            listUser.Add(u2);

            Users u3 = new Users();
            u3.userID = 3;
            u3.userName = "Tran Anh Dung";
            u3.userAccName = "trananhdung";
            u3.userPass = "1";
            u3.userPhone = "000";
            u3.isAdmin = false;
            u3.urlAvatar = "https://anhdephd.com/wp-content/uploads/2019/07/hinh-anh-avatar-chibi-cute-de-thuong-dep-nhat-cho-facebook-15-560x560.jpg";
            listUser.Add(u3);

            Users u4 = new Users();
            u4.userID = 4;
            u4.userName = "Duong Truong Vu";
            u4.userAccName = "duongtruongvu";
            u4.userPass = "1";
            u4.userPhone = "000";
            u4.isAdmin = false;
            u4.urlAvatar = "https://taoanhonline.com/wp-content/uploads/2019/08/hinh-anh-avatar-0.jpg";
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
            pro1.ProLinkPicture1 = "https://shopgiayreplica.com/wp-content/uploads/2020/11/jordan-1-low-light-smoke-grey.jpg";
            pro1.ProLinkPicture2 = "https://bizweb.dktcdn.net/100/363/576/products/air-jordan-1-low-white-metallic-gold-cz4776-100-1.jpg?v=1603178374000";
            pro1.ProLinkPicture3 = "https://bizweb.dktcdn.net/100/347/064/products/air-jordan-1-low-shoe-m16jdr.jpg?v=1598262665593";
            pro1.NumberOfSold = 123;
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
            pro2.ProLinkPicture1 = "https://product.hstatic.net/1000282067/product/air-jordan-1-retro-high-black-white-w-product_231181cd7d6c46fd87d17ff82f830641_master.jpg";
            pro2.ProLinkPicture2 = "https://sneakerdaily.vn/wp-content/uploads/2021/01/dark-mocha-air-jordan-1-555088-105-7.jpg";
            pro2.ProLinkPicture3 = "https://bizweb.dktcdn.net/100/347/064/products/air-jordan-1-high-og-wmns-tie-dye-cd0461-100-release-date.jpg?v=1599229584797";
            pro2.NumberOfSold = 67;
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
            pro3.ProLinkPicture1 = "https://media.gq.com/photos/5ce29fb0e352114010a7b749/16:9/w_2000,h_1125,c_limit/Graphic-Shirts-GQ-05202019.jpg";
            pro3.ProLinkPicture2 = "https://cf.shopee.vn/file/a85957b24bd1a72f0c84bdc8070d004d";
            pro3.ProLinkPicture3 = "https://2inn3u3s3k9e1asyaw3g5gb6-wpengine.netdna-ssl.com/wp-content/uploads/2018/03/funny-graphic-t-shirts-for-men-2018-mens-tees-2019.jpg";
            pro3.NumberOfSold = 201;
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
            pro4.ProLinkPicture1 = "https://cf.shopee.vn/file/d850ce1600d2c8d4885ef7fb50672e08";
            pro4.ProLinkPicture2 = "https://yousport.vn/Media/Blog/top-vot-cau-long-2019/danh-gia-top-vot-cau-long-2.jpg";
            pro4.ProLinkPicture3 = "https://vantelinvietnam.com/wp-content/uploads/2020/02/top-15-cay-vot-cau-long-tot-nhat-nen-mua.jpg";
            pro4.NumberOfSold = 211;
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
            pro5.ProLinkPicture = "https://media3.scdn.vn/img3/2019/4_17/OOVgWy.jpg";
            pro5.ProLinkPicture1 = "https://www.sport9.vn/images/thumbs/qua/qua-bong-da-molten-f5u3400-k19_750_20001756_.jpeg";
            pro5.ProLinkPicture2 = "http://media3.scdn.vn/img4/2020/01_04/f2w181CitR6hY0nEhPGI.jpg";
            pro5.ProLinkPicture3 = "https://cf.shopee.vn/file/59df15783847b0d441b796f96f03bddd";
            pro5.NumberOfSold = 87;
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
            pro6.ProLinkPicture = "http://ecotech.com.vn/Images/Userfiles/Slider-Content/thi-cong-san-san-bong-chuyen--249-3.jpg";
            pro6.ProLinkPicture1 = "http://www.buocnhayxitin.com/wp-content/uploads/2019/02/kich-thuoc-qua-bong-chuyen.jpg";
            pro6.ProLinkPicture2 = "https://bizweb.dktcdn.net/100/180/757/files/thumb.jpg?v=1507352112010"; 
            pro6.ProLinkPicture3 = "https://cf.shopee.vn/file/57be6aeec03e6815bb294459abd5c646";
            pro6.NumberOfSold = 78;
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
            pro7.ProLinkPicture = "https://img.lovepik.com/photo/40089/3074.jpg_wh860.jpg";
            pro7.ProLinkPicture1 = "https://sportonline.vn/wp-content/uploads/2017/12/qua-bong-ro-geru-star-s6.jpg";
            pro7.ProLinkPicture2 = "https://image.tienphong.vn/w665/Uploaded/2020/rrd_zrkwvo/2020_11_07/123138225_927096427828342_7262511522426498154_o_zsos.jpg";
            pro7.ProLinkPicture3 = "https://newsmd1fr.keeng.net/media_old_2016/medias12//2015/07/11/da1bcefe-84da-4f29-bd38-d6421dec5d22.jpg";
            pro7.NumberOfSold = 45;
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
            pro8.ProLinkPicture1 = "https://cf.shopee.vn/file/058498bbc7b6f826ca109b952e61a723";
            pro8.ProLinkPicture2 = "https://cf.shopee.vn/file/f9f17b29b990d189428eb1ea74310692";
            pro8.ProLinkPicture3 = "https://salt.tikicdn.com/ts/tmp/e5/1a/6e/ce444dc46e71db4c228bda83ec93bd7a.jpg";
            pro8.NumberOfSold = 089;
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
            pro9.ProLinkPicture1 = "http://fbshop.vn/wp-content/uploads/2018/04/vay-cau-long-victor-k81303-4-466x400.gif";
            pro9.ProLinkPicture2 = "https://fbshop.vn/wp-content/uploads/2018/04/vay-cau-long-victor-k76300-2.gif";
            pro9.ProLinkPicture3 = "https://cf.shopee.vn/file/5cd7a4f75c66f506336d93fb3b248e89";
            pro9.NumberOfSold = 76;
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
            pro10.ProLinkPicture = "https://c.pxhere.com/photos/69/80/cannabis_hemp_marijuana-626167.jpg!s";
            pro10.ProLinkPicture1 = "https://baothainguyen.vn/UserFiles/image/cs(30).jpg";
            pro10.ProLinkPicture2 = "https://vinmec-prod.s3.amazonaws.com/images/20191125_074919_348099_can-sa.max-1800x1800.jpg";
            pro10.ProLinkPicture3 = "https://salt.tikicdn.com/cache/w444/ts/product/fd/b6/8f/3f179a49c92a7993ec9ec077154cf406.jpg";
            pro10.NumberOfSold = 13;
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
            pro11.ProLinkPicture1 = "https://product.hstatic.net/200000199393/product/0t8a5965_195d2ba4af3942728a9e28706a88a021_master.jpg";
            pro11.ProLinkPicture2 = "https://sudospaces.com/babycuatoi/2020/03/do-choi-ban-co-cho-be.jpg";
            pro11.ProLinkPicture3 = "https://giadungnhaviet.com/wp-content/uploads/2020/01/bo-co-vua-Albatros-Royal-AW1579917-4.jpg";
            pro11.NumberOfSold = 45;
            listPro.Add(pro11);

            Products pro12 = new Products();
            pro12.proID = 12;
            pro12.proName = "Chuột thể thao điện tử Logitech";
            pro12.proBrand = "Logitech";
            pro12.proOrigin = "VietNam";
            pro12.proOldPrice = 800000;
            pro12.proPrice = 650000;
            pro12.proDescription = "Chuột Logitech G304 là một trong những dòng chuột không dây Logitech được thiết kế cho hiệu suất thực sự " +
                "với các đột phá công nghệ mới nhất ở mức giá thành phù hợp với người dùng phổ thông, học sinh - sinh viên. GEARVN.COM chuột " +
                "gaming logitech g304 lightspeed wireless Thông qua chế tạo và thiết kế đầu cuối, Logitech G đã phát triển một giải pháp không " +
                "dây mạnh mẽ để giải quyết vấn đề cơ bản của các dòng chuột bluetooth giá rẻ hiện nay như độ trễ, độ ổn định và khả năng kết nối." +
                " Kết quả cuối cùng là LIGHTSPEED, giải pháp không dây cấp độ chuyên gia đạt được hiệu suất như có dây. GEARVN.COM chuột gaming" +
                " logitech g304 lightspeed wireless HERO là cảm biến quang học đổi mới được thiết kế bởi Logitech G để mang lại hiệu suất đẳng cấp" +
                " dẫn đầu và tiết kiệm năng lượng tới 10 lần (so với hệ thệ trước). Một trong những dòng chuột gaming giá rẻ đến từ Logitech được" +
                " trang bị cảm biến HERO mang lại hiệu suất ổn định và chính xác vượt trội với khả năng làm mượt, lọc và tăng tốc nhanh chóng. " +
                "GEARVN.COM chuột gaming logitech g304 lightspeed wireless Các phím chính của G304, cả ở bên trái và phải, được đánh giá 10 triệu" +
                " lần nhấp. G304 cũng có nút giữa, nút DPI và hai nút bên có thể được lập trình tùy theo sở thích của bạn bằng G HUB của Logitech.";
            pro12.status = 1;
            pro12.catID = 3;
            pro12.ProLinkPicture = "https://cf.shopee.vn/file/4a628d09896585e303a2644b03171b0d";
            pro12.ProLinkPicture1 = "https://phucanhcdn.com/media/product/35684_g304.jpg";
            pro12.ProLinkPicture2 = "http://ae01.alicdn.com/kf/H73874085766d48a192f521766553aed3Z.jpg_q50.jpg";
            pro12.ProLinkPicture3 = "https://anphat.com.vn/media/product/37343_logitech_g304_kda__1_.jpg";
            pro12.NumberOfSold = 425;
            listPro.Add(pro12);


            Orders od1 = new Orders();
            od1.orderID = 1;
            od1.proID = 1;
            od1.userID = 1;
            od1.proNum = 1;
            od1.orderCTime = DateTime.Now;
            od1.oderATime = DateTime.Now;
            od1.orderStatus = 0;
            if (od1.orderStatus != 0) od1.oderATime = DateTime.Now;
            listOrd.Add(od1);

            Orders od2 = new Orders();
            od2.orderID = 2;
            od2.proID = 12;
            od2.userID = 1;
            od2.proNum = 1;
            od2.orderCTime = DateTime.Now;
            od2.oderATime = DateTime.Now;
            od2.orderStatus = 1;
            if (od1.orderStatus != 0) od2.oderATime = DateTime.Now;
            listOrd.Add(od2);

            Orders od3 = new Orders();
            od3.orderID = 3;
            od3.proID = 8;
            od3.userID = 1;
            od3.proNum = 1;
            od3.orderCTime = DateTime.Now;
            od3.oderATime = DateTime.Now;
            od3.orderStatus = -1;
            if (od1.orderStatus != 0) od3.oderATime = DateTime.Now;
            listOrd.Add(od3);
        }
    }
}
