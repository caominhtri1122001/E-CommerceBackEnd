// Load dữ liệu cho thàng table 
console.log("truong my duyen")
var modal = document.getElementById("myModal");
var login = document.getElementById("logInOut");
var mF = document.getElementById("majorForm");
var mF2 = document.getElementById("majorForm2");
var idsanpham = 0;


login.style.display = "none"
function requestDataListProduct(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
                console.log("thanh cong roi ne")
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

var ThemSua = function (id) {
    if (id == 0) {
        // hiện form add để điền thông tin sp
        modal.style.display = "block"
        console.log("Thêm")
    } else {
        // hiện form như add nhưng điền sẵn thông tin cũ vào
        console.log(id)
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
                console.log("xóa ok")
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
    }
}

function isInt(num) {
    if (num == parseInt(num)) return true
    return false
}

// lấy dữ liệu trên form
function AddEdit() {
    if (isInt(giasanpham.value)) {
        var tensp = tensanpham.value
        var theloaisp
        if (mF.value == "Giày") theloaisp = 2
        if (mF.value == "Áo quần") theloaisp = 1
        if (mF.value == "Phụ kiện") theloaisp = 3
        if (mF.value == "Bóng") theloaisp = 4
        var thuonghieu = tenthuonghieu.value
        var xuatxu = tenxuatxu.value
        var giacu = giasanpham.value
        var khuyenmai
        if (mF2.value == "0%") khuyenmai = 0
        if (mF2.value == "5%") khuyenmai = 5
        if (mF2.value == "10%") khuyenmai = 10
        if (mF2.value == "20%") khuyenmai = 20
        var giamoi
        if ( giacu > 10000 ) giamoi = Math.floor((giacu - giacu * khuyenmai / 100) / 1000) * 1000
        else giamoi = Math.floor(giacu - giacu * khuyenmai / 100)

        var mieuta = mieutasanpham.value

        var link0 = "https://gemdigital.vn/wp-content/uploads/2019/11/8-1-1106x800.jpg"
        var link1 = "https://gemdigital.vn/wp-content/uploads/2019/11/8-1-1106x800.jpg"
        var link2 = "https://gemdigital.vn/wp-content/uploads/2019/11/8-1-1106x800.jpg"
        var link3 = "https://gemdigital.vn/wp-content/uploads/2019/11/8-1-1106x800.jpg"

        requestAEP("http://localhost:37504/api/Product/AddEditProduct?", idsanpham, tensp, thuonghieu, xuatxu, giacu, giamoi, mieuta, theloaisp, link0, link1, link2, link3)
        location.reload()
    } else {
        alert("Giá nhập vào sai kiểu dữ liệu")
    }
}

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
                alert ("Thêm mới thành công!")
            }
            else {
                alert("Thêm mới thất bại, có thể dữ liệu truyền vào không hợp lệ!")
            }
        },
        error: function (xhr) {
        }
    });
}