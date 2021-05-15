// Load dữ liệu cho thàng table 
console.log("truong my duyen")
var modal = document.getElementById("myModal");
var login = document.getElementById("logInOut");
var catagory = document.getElementById("catogory");
var promotion = document.getElementById("promotion");
var idsanpham = 0;
var productIMG=document.getElementById("input-image")

login.style.display = "none"

function requestDataListProduct(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
                loadData(response.data)
            }
            else {
                alert(response.message)
            }
        },
        error: function (xhr) {

        }
    });
}

var goToPage = function (id) {
    window.location.href = "/detailtest.html?productId=" + id;
}
//Khi chon sửa thì mình xác định cái id của sản phẩm cần sửa, truyền nó vào link, để lấy dữ liệu , sau đó load nó lên form
function requestGetProduct(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
                loadDataForm(response.data)
            }
            else {
                alert("???")
            }
        },
        error: function (xhr) {
        }
    });
}

var loadDataForm = function(sp) {
    tensanpham.value = sp.proName
    if(sp.catID == 1) catagory.value = "Áo quần"
    if(sp.catID == 2) catagory.value = "Giày"
    if(sp.catID == 3) catagory.value = "Phụ kiện"
    if(sp.catID == 4) catagory.value = "Bóng"
    tenthuonghieu.value = sp.proBrand
    tenxuatxu.value = sp.proOrigin
    giasanpham.value = sp.proOldPrice
    mieutasanpham.value = sp.proDescription
    promotion.value = "0%"
}

var ThemSua = function (id) {
    if (id == 0) {
        // hiện form add để điền thông tin sp
        modal.style.display = "block"
        loadNullForm()
        console.log("Thêm")
    } else {
        // hiện form như add nhưng điền sẵn thông tin cũ vào
        modal.style.display = "block"
        idsanpham = id
        requestGetProduct("http://localhost:37504/api/Product/GetProductByID?proID="+id)
    }
}

var Xoa = function (id) {
    requestDeleteProduct("http://localhost:37504/api/Product/DeleteByID?proID=" + id)
    location.reload()
}
function requestDeleteProduct(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "DELETE",
        success: function (response) {
            if (response.success) {

            }
            else {
                alert("???")
            }
        },
        error: function (xhr) {
        }
    });
}

var loadData = function (proudcts) {
    for (var i = 0; i < proudcts.length; i++) {
        var productHtml = `
        <div class="row list product">
                        <div class="cell"  data-title="Name">
                             ${proudcts[i].proID}
                            </div>
                            <div class="cell" id="proName" data-title="Age">
                              ${proudcts[i].proName}
                            </div>
                            <div class="cell hinhanh" data-title="Occupation">
                              <img src="${proudcts[i].proLinkPicture}" alt="">
                            </div>
                            <div class="cell" data-title="Location">
                            ${proudcts[i].category}
                            </div>
                            <div class="cell" data-title="numberSold">
                            ${proudcts[i].numberOfSold}
                            </div>
                            <div class="cell func edit" data-title="edit" onclick = "ThemSua(${proudcts[i].proID})">
                                <i class="fas fa-edit"></i>
                            </div>
                            <div class="cell func" data-title="delete" onclick = "Xoa(${proudcts[i].proID})">
                                <i class="fas fa-trash-alt"></i>
                           </div>
                            <div class="cell func" data-title="addmore">
                                <i class="far fa-plus-square"></i>
                            </div>
                        </div>
                          
    `
        $("#product-list-row").append(productHtml)
    }
}
$(document).ready(function () {
    console.log("ready!");
    requestDataListProduct("http://localhost:37504/api/Product/GetListProductManage");
});



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        idsanpham = 0
    }
}

// lấy dữ liệu trên form
//cua vu duong
function Edit() {
        var tensp = tensanpham.value
        var theloaisp
        if (catagory.value == "Giày") theloaisp = 2
        if (catagory.value == "Áo quần") theloaisp = 1
        if (catagory.value == "Phụ kiện") theloaisp = 3
        if (catagory.value == "Bóng") theloaisp = 4
        var thuonghieu = tenthuonghieu.value
        var xuatxu = tenxuatxu.value
        var giacu = giasanpham.value
        var khuyenmai
        if (promotion.value == "0%") khuyenmai = 0
        if (promotion.value == "5%") khuyenmai = 5
        if (promotion.value == "10%") khuyenmai = 10
        if (promotion.value == "20%") khuyenmai = 20
        var giamoi
        if ( giacu > 10000 ) giamoi = Math.floor((giacu - giacu * khuyenmai / 100) / 1000) * 1000
        else giamoi = Math.floor(giacu - giacu * khuyenmai / 100)

        var mieuta = mieutasanpham.value

        var link0 = "https://gemdigital.vn/wp-content/uploads/2019/11/8-1-1106x800.jpg"
        var link1 = "https://gemdigital.vn/wp-content/uploads/2019/11/8-1-1106x800.jpg"
        var link2 = "https://gemdigital.vn/wp-content/uploads/2019/11/8-1-1106x800.jpg"
        var link3 = "https://gemdigital.vn/wp-content/uploads/2019/11/8-1-1106x800.jpg"

        console.log("truoc khi thuc hien thay doi")
        requestAEP("http://localhost:37504/api/Product/AddEditProduct?", idsanpham, tensp, thuonghieu, xuatxu, giacu, giamoi, mieuta, theloaisp, link0, link1, link2, link3)
        location.reload()
        idsanpham = 0;
}
//cua my duyen
//http://localhost:37504/api/Product?proID=121&proName=tuan&proBrand=tuan&proOrigin=tuan&proOldPrice=120202&proPrice=155151&proDescription=tuan&status=2&catID=2


function requestAEP(url, id, tensp, thuonghieu, xuatxu, giacu, giamoi, mieuta, theloai, l0, l1, l2, l3) {
    $.ajax({
        url: url,
        data: { 
            "id": id,
            "ten": tensp,
            "th": thuonghieu,
            "ng": xuatxu,
            "gc": giacu,
            "gm": giamoi,
            "mt": mieuta,
            "cid": theloai,
            "l0": l0,
            "l1": l1,
            "l2": l2,
            "l3": l3,
          },
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
               
                console.log("thay doi thanh cong")
            }
            else {
                
                alert("Thất bại, có thể dữ liệu truyền vào không hợp lệ!")
            }
        },
        error: function (xhr) {
        }
    });
}

//My Duyen chinh sua , ham them moi san pham
//Hàm hiện form đăng ký lên
function AddProduct(){
    modal.style.display = "block"
}
//Hàm xác nhận việc đăng ký
function AcpToAdd(){
    let proID=2;
    let proName="san pham moi"
    let giamgia;
    if(promotion.value=="0%") giamgia=0;
    if(promotion.value=="5%") giamgia=0.05;
    if(promotion.value=="10%") giamgia=0.1
    if(promotion.value=="20%") giamgia=0.2;

    var theloaisp
        if (catagory.value == "Giày") theloaisp = 2
        if (catagory.value == "Áo quần") theloaisp = 1
        if (catagory.value == "Phụ kiện") theloaisp = 3
        if (catagory.value == "Bóng") theloaisp = 4


    var product={
        "proName": tensanpham.value,
        "proBrand": tenthuonghieu.value,
        "proOrigin": tenxuatxu.value,
        "proOldPrice": giasanpham.value,
        "proPromotion": giamgia,
        "proDescription": mieutasanpham.value,
        "proStatus":1,
        "proCatID": theloaisp,
        "proLink": "l0",
        "proLink1": "l1",
        "proLink2": "l2",
        "proLink3": "linkfake",
     }
     let urlRequestFake=`http://localhost:37504/api/Product?proID=2&proName=${product.proName}&proBrand=${product.proBrand}&proOrigin=${product.proOrigin}&proOldPrice=${product.proOldPrice}&proPromotion=${product.proPromotion}&proDescription=${product.proDescription}&proStatus=1&proCatID=${product.proCatID}&proLink=${product.proLink}&proLink1=link1&proLink2=link2&proLink3=link3`

     let urlRequest=`http://localhost:37504/api/Product?proID=2&proName=Aooooooo%20quan&proBrand=Nike&proOrigin=USA&proOldPrice=200&proPromotion=0&proDescription=giay%20cua%20usa&proStatus=1&proCatID=2&proLink=link&proLink1=link1&proLink2=link2&proLink3=link3`
    requestAddProduct(urlRequestFake)
   
}
function requestAddProduct(url) {
    $.ajax({
        url: url,
        data:{
            "proID": "id",
            "proName": "tensp",
            "proBrand": "thuonghieu",
            "proOrigin": "xuatxu",
            "proOldPrice": 12,
            "proPromotion": 0,
            "proDescription": "mieuta",
            "proStatus":1,
            "proCatID": 2,
            "proLink": "l0",
            "proLink1": "l1",
            "proLink2": "l2",
            "proLink3": "linkfake",
        },
        cache: false,
        type: "POST",
        success: function (response) {
            console.log(response)
            if (response.success) {
                alert ("Theem moiw san pham thanh cong!")
            }
            else {
                alert("Thất bại, có thể dữ liệu truyền vào không hợp lệ!")
            }
        },
        error: function (xhr) {
        }
    });
}

//Sau khi nhấn nút đồng ý thì để xem nó sẽ thực hiện thêm mới hay edit 
function AddOrEdit(){
   if(idsanpham==0){
    AcpToAdd()
   }
   else{
    Edit()
   }
}