var username = document.getElementById("header__navbar-user-name")
var useraccount = document.getElementById("useraccount")
var logInOut = document.getElementById("logInOut")
let userIMG = document.getElementById("userIMG")
var adminEdit = document.getElementById("adminEdit")
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2")
let emailLogin = document.getElementById("emailLogin")
var login = document.getElementById("logInOut")
var user = document.getElementById("useraccount")
var adminManage = document.getElementById("adminManage")

var userdata = []

// Theem vao ne 
//ham dang xuat dang nhap hien form 
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openRegister() {
    modal.style.display = "block";
}
function openLogInOut() {
    modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}
//ket thuc dang xuat dang nhap hien form

adminEdit.style.display = "none"


function requestDataDetail(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "GET",
        success: function (response) {

            if (response.success) {
                loadData2(response.data)
            }
            else {
                alert(response.message)

            }
        },
        error: function (xhr) {
        }
    });
}

var loadData2 = function (proudcts) {
    var productHtml = `
        <div class="product-img">
            <div class="product-spe-img">
                <img src="${proudcts.proLinkPicture}" alt="hinhanh">
            </div>
            <div class="product-small-img">
                <img src="${proudcts.proLinkPicture1}" alt="">
                <img src="${proudcts.proLinkPicture2}" alt="">
                <img src="${proudcts.proLinkPicture3}" alt="">
                <img src="https://likefit.vn/wp-content/uploads/2020/07/snb3-600x600.jpg" alt="">
                <img src="https://likefit.vn/wp-content/uploads/2020/07/snb3-600x600.jpg" alt="">
            </div>
            <div class="product__sharing-icons hide-on-mobile-tablet">
                <div class="text">Chia sẻ:</div>
                <a href="#" class="product__action-icon messenger">
                    <i class="fab fa-facebook-messenger"></i>
                </a>
                <a href="#" class="product__action-icon facebook">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="product__action-icon google">
                    <i class="fab fa-google-plus"></i>
                </a>
                <a href="#" class="product__action-icon pinterest">
                    <i class="fab fa-pinterest"></i>
                </a>
                <a href="#" class="product__action-icon twitter">
                    <i class="fab fa-twitter-square"></i>
                </a>
               
            </div>
        </div>
        <div id="product-infor">
            <div class="product-infor-inner">
                <h1 class="product-title entry-title">
                   ${proudcts.proName}
               </div>
               <div class="product__price">
                <div class="product__price-main">
                    <span class="product__price-old">${proudcts.proOldPrice / 1000}.000đ</span>
                    <div class="product__price-current">
                        <span class="product__price-new">${proudcts.proPrice / 1000}.000đ</span>
                        <span class="product__price-label bgr-orange">${Math.floor((proudcts.proOldPrice - proudcts.proPrice) / proudcts.proOldPrice * 100)}%GIẢM</span>
                    </div>
                </div>
                <div class="product__price-slogan hide-on-mobile-tablet">
                    <i class="product__price-icon-tag fas fa-tags"></i>
                    <span class="product__price-slogan-text">Ở đâu rẻ hơn, Minecraft Shop hoàn
                        tiền</span>
                    <i class="product__price-icon-question far fa-question-circle"></i>
                </div>
            </div> 
            <div class="product-decription">
                <p class="product-detail-item"><strong>Mô tả sản phẩm</strong></p>
                <div class="product-detail-text">
                    <p>– <strong>Mô tả</strong>: ${proudcts.proDescription}</p>
                    <p>– <strong>Thương hiệu</strong>: ${proudcts.proBrand}</p>
                    <p>– <strong>Xuất xứ</strong>: ${proudcts.proOrigin}</p>
                </div>
            </div>
            <div class="product__qnt hide-on-mobile">
                <label class="product__qnt-label width-label">Số Lượng</label>
                <div class="shop__qnt-btns">
                    <button class="soluong" onclick = "giamsl()">
                        <i class="shop__qnt-btn-icon fas fa-minus"></i>
                    </button>
                    <input class="shop__qnt-input" type="text" value="1" maxlength="4" id = "soluongg">
                    <button class="soluong" onclick = "tangsl()">
                        <i class="shop__qnt-btn-icon fas fa-plus"></i>
                    </button>
                </div>
                <div class="product__qnt-note">
                    <span class="product__qnt-note-num">1100</span>
                    sản phẩm có sẵn
                </div>
            </div>
            <div class="product-btns-main">
                <button class="product-btn-main product-btn-main__msg clear-btn hide-on-tablet">
                    <i class="product-btn-main__msg-icon far fa-comment-dots"></i>
                </button>
                <button class="product-btn-main product-btn-main__adding">
                    <i class="product-btn-main__adding-icon fas fa-cart-plus"></i>
                    <span class="product-btn-main__text product-btn-main__adding-text hide-on-mobile">Thêm Vào Giỏ Hàng</span>
                </button>
                <button onclick = "MuaNgay()" class="product-btn-main product-btn-main__buying">
                    <span class="product-btn-main__text product-btn-main__buying-text">Mua
                        Ngay</span>
                </button>
            </div>
            <div class="product__guarantee-container">
                <a href="*" class="product__guarantee">
                    <div class="product__guarantee-wrapper">
                        <span>
                            <i class="product__guarantee-icon fas fa-clipboard-check"></i>
                        </span>
                        <div class="product__guarantee-text">Minecraft Shop Đảm Bảo</div>
                    </div>
                    <span class="product__guarantee-note">3 Ngày Trả Hàng / Hoàn Tiền</span>
                </a>
            </div> 
            </div>
    `
    $("#product-inner").append(productHtml)
}
$(document).ready(function () {
    var url_string = "http://www.example.com/t.html?a=1&b=3&c=m2-m3-m4-m5";
    var url = new URL(url_string);
    var c = url.searchParams.get("c");
    console.log(c);
    var url = new URL(window.location.href)
    let productId = url.searchParams.get("productId");
    requestDataDetail("http://localhost:37504/api/Product/GetProductByID?proID=" + productId);
    requestDataUser("http://localhost:37504/api/Users/LayListUser");

});

console.log("gio se check xem co ai dang nhap chua ")
let listdata = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
console.log("so luong localstorage" + listdata.length)
console.log("Xem thong tin nguoi dung : ")

if (listdata.length == 1) shownguoidung()

//neu co du lieu trong local thi hien nguoi dung khong thi hien dang ky 
function shownguoidung() {
    useraccount.style.display = "flex"
    logInOut.style.display = "none"
    username.innerText = listdata[0].name
    userIMG.src = listdata[0].src
    if (listdata[0].isAdmin == true) adminManage.style.display = "block"

}
//Nếu nhấn logout thì data sẽ xóa dữ liệu 
function logOut() {
    localStorage.clear();
    location.reload()
}
// Sau khi bam dang ky , dang nhap 

//dang nhap tu giao dien detail 
function requestDataUser(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
                checkData(response.data)
            }
            else {
                alert(response.message)
            }
        },
        error: function (xhr) {

        }
    });
}

var checkData = function (data) {
    for (i = 0; i < data.length; i++) {
        userdata.push(data[i])
    }
}

// Thực hiện hàm đăng nhập 
function checkLogin() {
    modal2.style.display = "none";
    let valid = false;
    let usevalid
    userdata.forEach(function (item) {
        if (emailLogin.value == item.userAccName && passwordLogin.value == item.userPass) {
            console.log(emailLogin.value)
            valid = true
            usevalid = item
        }
    })
    // Đăng nhập thành công lưu người dùng vào local
    if (valid == true) {
        if (usevalid.userStatus == -1) alert("Tài khoản này đã bị khóa!")
        else {
            console.log("da tim duoc nguoi")
            login.style.display = "none"
            user.style.display = "flex"
            username.innerText = usevalid.userName
            userIMG.src = usevalid.userLinkAvatar
            // Nếu là admin thì hiển thị giao diện admin 
            if (usevalid.isAdmin) adminEdit.style.display = "block"
            // Dùng local để lưu người đã đăng nhập
            var listnguoidung = []
            var nguoidung = {
                "id": usevalid.userID,
                "name": usevalid.userName,
                "accname": usevalid.userAccName,
                "pass": usevalid.userPass,
                "phone": usevalid.userPhone,
                "address": usevalid.userAddress,
                "src": usevalid.userLinkAvatar,
                "isAdmin": usevalid.isAdmin,
            }
            listnguoidung.push(nguoidung)
            localStorage.setItem("data", JSON.stringify(listnguoidung))
            location.reload()
        }
    } else alert("sai thông tin tài khoản hoặc mật khẩu")
}


// đăng ký
function Regis() {
    modal.style.display = "none";
    if (mk.value == mk2.value) {
        requestRegisAcc("http://localhost:37504/api/Users/DangKy?taikhoan=" + tk.value + "&matkhau=" + mk.value + "&hvt=" + hvt.value +
                        "&sdt=" + sdt.value + "&dc=" + dc.value)
    } else {
        alert("Mật khẩu xác nhận không khớp")
    }
}

// gửi yêu cầu đăng ký
function requestRegisAcc(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "POST",
        success: function (response) {
            if (response.success) {
                alert("Đăng ký thành công!")
                location.reload()
            }
            else {
                alert("Đăng ký thất bại, tài khoản đã tồn tại hoặc dữ liệu điền vào không hợp lệ!")
            }
        },
        error: function (xhr) {

        }
    });
}

// chuyển đổi form đăng nhập / đăng ký
function changeToRegister() {
    modal.style.display = "block";
    modal2.style.display = "none";
}
function changeToLogin() {
    modal.style.display = "none";
    modal2.style.display = "block";
}


function isInt(num) {
    if (num == parseInt(num)) return true
    return false
}

function giamsl() {
    if (isInt(soluongg.value) && soluongg.value > 1) {
        soluongg.value--;
    } else {
        soluongg.value = 1;
    }
}

function tangsl() {
    if (isInt(soluongg.value) && soluongg.value >= 1) {
        soluongg.value++;
    } else {
        soluongg.value = 1;
    }
}

function MuaNgay() {
    if (isInt(soluongg.value) && soluongg.value > 0) {
        if (listdata.length != 0){
            var url = new URL(window.location.href)
            let productId = url.searchParams.get("productId");
            requestDatDon("http://localhost:37504/api/Orders/DatDon?pid=" + productId + "&uid=" + listdata[0].id + "&s=" + soluongg.value)
            alert ("đã đặt đơn hàng với id = " + productId + "và số lượng là " + soluongg.value + "trên userID: " + listdata[0].id)
        } else alert("Hãy đăng nhập trước")
    } else {
        alert("Số lượng lỗi, hãy thử lại!")
        soluongg.value = 1;
    }
}

function requestDatDon(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "POST",
        success: function (response) {
            console.log(response)
            if (response.success) {
                alert ("Đặt ok thật")
            }
            else {
                alert("Thất bại???")
            }
        },
        error: function (xhr) {
        }
    });
}