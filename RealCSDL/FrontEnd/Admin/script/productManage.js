// Load dữ liệu cho thàng table 
var modal = document.getElementById("myModal");
var login = document.getElementById("logInOut");
var catagory = document.getElementById("catogory");
var promotion = document.getElementById("promotion");
var idsanpham = 0;

var productIMG = document.getElementById("input-image")


$('#orderManage').click(function () {
    window.location.href = "../src/orderAdmin.html"
});

$('#proManage').click(function () {
    window.location.href = "../src/productManage.html.html"
});

$('#userManage').click(function () {
    window.location.href = "../src/userManage.html"
});
$( '#logOut' ).click(function() {
    window.location.href="../../giaodienchinh/src/index.html"
  });


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

var loadDataForm = function (sp) {
    tensanpham.value = sp.proName
    if (sp.catID == 1) catagory.value = "Áo quần"
    if (sp.catID == 2) catagory.value = "Giày"
    if (sp.catID == 3) catagory.value = "Phụ kiện"
    if (sp.catID == 4) catagory.value = "Bóng"
    tenthuonghieu.value = sp.proBrand
    tenxuatxu.value = sp.proOrigin
    giasanpham.value = sp.proOldPrice
    mieutasanpham.value = sp.proDescription
    promotion.value = "0%"
}

var ThemSua = function (id) {
    if (id == 0) {
        idsanpham = id
        modal.style.display = "block"
        //loadNullForm()
        console.log("Thêm")
    } else {
        idsanpham = id
        modal.style.display = "block"
        requestGetProduct("http://localhost:37504/api/Product/GetProductByID?proID=" + id)
    }
}

var Xoa = function (id) {
    requestDeleteProduct("http://localhost:37504/api/Product/XoaSanPham?proID=" + id)
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
                            ${proudcts[i].proNOS}
                            </div>
                            <div class="cell func edit" data-title="edit" onclick = "ThemSua(${proudcts[i].proID})">
                                <i class="fas fa-edit"></i>
                            </div>
                            <div class="cell func" data-title="delete" onclick = "Xoa(${proudcts[i].proID})">
                                <i class="fas fa-trash-alt"></i>
                           </div>
                            <div class="cell func" data-title="addmore" onclick = "NhapHang()">
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
function CheckDataFom(){
    let checkValid=true;
    if(tensanpham.value=="") {
        nameError.innerHTML="Bạn chưa nhập tên sản phẩm"
        checkValid=false;
    }
    if(catagory.value=="Chọn thể loại sản phẩm") {
        categoryError.innerHTML="Bạn chưa chọn thể loại sản phẩm"
        checkValid=false;
    }
    if(tenthuonghieu.value=="") {
        brandError.innerHTML="Bạn chưa nhập tên thương hiệu"
        checkValid=false;
    }
    if(tenxuatxu.value=="") {
        originError.innerHTML="Bạn chưa nhập tên xuất xứ"
        checkValid=false;
    }
    if(giasanpham.value=="") {
        priceError.innerHTML="Bạn chưa nhập giá sản phẩm"
        checkValid=false;
    }
    if(promotion.value =="Chọn khuyến mãi kèm theo") {
        promotionError.innerHTML="Bạn chưa chọn khuyến mãi sản phẩm"
        checkValid=false;
    }
    if(mieutasanpham.value=="") {
        decriptionError.innerHTML="Bạn chưa nhập mô tả sản phẩm"
        checkValid=false;
    }
    if(giasanpham.value=="") {
        priceError.innerHTML="Bạn chưa nhập giá sản phẩm"
        checkValid=false;
    }
   return checkValid
}

function XacNhan() {
    //Biến kiểm tra xem thông tin trên form đã nhập đủ hay chưa, nếu đủ thì cho nó sửa hoặc add thêm 
    var checkValid=CheckDataFom()
    if(checkValid){
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
        if (giacu > 10000) giamoi = Math.floor((giacu - giacu * khuyenmai / 100) / 1000) * 1000
        else giamoi = Math.floor(giacu - giacu * khuyenmai / 100)
    
        var mieuta = mieutasanpham.value
    
        var link0 = "https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/136413530_2482105285426841_2609161170029067015_n.png?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=LV5LA72nlqoAX-KqoaE&_nc_ht=scontent.fpnh22-1.fna&oh=08507bf7679e83468f51bb8643fefe33&oe=60CAAA6C"
        var link1 = "https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/136413530_2482105285426841_2609161170029067015_n.png?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=LV5LA72nlqoAX-KqoaE&_nc_ht=scontent.fpnh22-1.fna&oh=08507bf7679e83468f51bb8643fefe33&oe=60CAAA6C"
        var link2 = "https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/136413530_2482105285426841_2609161170029067015_n.png?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=LV5LA72nlqoAX-KqoaE&_nc_ht=scontent.fpnh22-1.fna&oh=08507bf7679e83468f51bb8643fefe33&oe=60CAAA6C"
        var link3 = "https://scontent.fpnh22-1.fna.fbcdn.net/v/t1.6435-9/136413530_2482105285426841_2609161170029067015_n.png?_nc_cat=108&ccb=1-3&_nc_sid=730e14&_nc_ohc=LV5LA72nlqoAX-KqoaE&_nc_ht=scontent.fpnh22-1.fna&oh=08507bf7679e83468f51bb8643fefe33&oe=60CAAA6C"
    
        var qadd = "http://localhost:37504/api/Product/ThemSanPham?proName=" + tensp + "&proBrand=" + thuonghieu + "&proOrigin=" + 
        xuatxu + "&proOldPrice=" + giacu + "&proPrice=" + giamoi + "&proDescription=" + mieuta + "&catID=" + theloaisp + 
        "&proLinkPicture=" + link0 + "&proLinkPicture1=" + link1 + "&proLinkPicture2=" + link2 + "&proLinkPicture3=" + link3
    
        var qedit = "http://localhost:37504/api/Product/SuaThongTinSanPham?proID=" + idsanpham + "&proName=" + tensp + "&proBrand=" + 
        thuonghieu + "&proOrigin=" + xuatxu + "&proOldPrice=" + giacu + "&proPrice=" + giamoi + "&proDescription=" + mieuta + "&catID=" + theloaisp +
        "&proLinkPicture=" + link0 + "&proLinkPicture1=" + link1 + "&proLinkPicture2=" + link2 + "&proLinkPicture3=" + link3
    
        if (idsanpham == 0) requestAdd(qadd);
        else requestEdit(qedit);
    
        location.reload()
        idsanpham = 0;
    }
    //Neeus sai thif hienj form loi
    else {
        alert("Du lieu dung")
    }
   
}

function requestEdit(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "PUT",
        success: function (response) {
            if (response.success) {
                console.log("sửa thành công ? ")
            }
            else {

                alert("Thất bại, có thể dữ liệu truyền vào không hợp lệ!")
            }
        },
        error: function (xhr) {
        }
    });
}

function requestAdd(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "POST",
        success: function (response) {
            if (response.success) {
                console.log("Them ok")
            }
            else {

                alert("Thất bại, có thể dữ liệu truyền vào không hợp lệ!")
            }
        },
        error: function (xhr) {
        }
    });
}

function NhapHang() {
    alert("Chức năng đang phát triển")
}