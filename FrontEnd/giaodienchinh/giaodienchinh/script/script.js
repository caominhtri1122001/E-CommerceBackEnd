var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2")
var login = document.getElementById("logInOut")
var user = document.getElementById("useraccount")
let username = document.getElementById("header__navbar-user-name")
let userIMG=document.getElementById("userIMG")
let adminManage=document.getElementById("adminManage")

var proPrice=document.getElementById("proPrice")


// nguoi dung detail 

// Get the button that opens the modal

// Get the <span> element that closes the modal

//Load dữ liệu cho sản phẩm 
function requestData(url) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var data = JSON.parse(this.responseText)
            loadData(data)
            console.log("load ok")
        } else {
            console.log("error")
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

function requestDataAjax(url) {
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
    window.location.href = "../src/detail.html?productId=" + id;
}


var loadData = function (proudcts) {
    for (var i = 0; i < proudcts.length; i++) {
        let product = proudcts[i];
        var productHtml = `
        <div onclick="goToPage('${product.proID}')" class="grid__column-2-4">
                            <!-- product-item -->
                                <a href="#" id="0" class="home-product-item">
                                    <img src=" ${product.proLinkPicture}">
                                    <div class="home-product-item__name"> ${product.proName} </div>
                                    <div class="home-product-item__price">
                                        <span class="home-product-item__price-old"> ${product.proOldPrice/1000}.000đ</span>
                                        <span class="home-product-item__price-current"> ${product.proPrice/1000}.000đ </span>
                                    </div>
                                    <div class="home-product-item__action">
                                        <div class="home-product-item__rating">
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <span class="home-product-item__sold"> ${product.numberOfSold} đã bán </span>
                                    </div>
                                    <div class="product-favourite">
                                        <i class="fas fa-check"></i>
                                        <span> Yêu thích </span>
                                    </div>
                                    <div class="product-sale-off">
                                        <span class="product-sale-off__percent"> ${Math.floor((product.proOldPrice-product.proPrice)/product.proOldPrice*100)}% </span>
                                        <span class="product-sale-off__label"> GIẢM </span>
                                    </div>
                                </a>
                        </div>
    `
        $("#product-list-row").append(productHtml)
    }
}
$(document).ready(function () {
    console.log("ready!");
    requestDataAjax("http://localhost:37504/api/Product");
    requestDataUser("http://localhost:37504/api/Users");
});


// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
function openRegister() {
    modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal || event.target == modal2) {
        modal.style.display = "none";
        modal2.style.display = "none";
    }
}

//Đăng nhập
function openLogInOut() {
    modal2.style.display = "block";
}
// chuyển đổi form đăng nhập / đăng ký
function changeToLogin() {
    modal.style.display = "none";
    modal2.style.display = "block";
}
function changeToRegister() {
    modal.style.display = "block";
    modal2.style.display = "none";
}
// Thực hiện chức năng xem xét dữ liệu sau khi đăng nhập
var userdata = []
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

//Ban đầu không có người đăng nhập
user.style.display = "none"   
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
        console.log("da tim duoc nguoi")
        login.style.display = "none"
        //chinh
        user.style.display = "flex"     
        username.innerText = usevalid.userName
        userIMG.src =usevalid.urlAvatar  
        // Nếu là admin thì hiển thị giao diện admin 
        if(usevalid.isAdmin) adminManage.style.display="block"
        // Dùng local để lưu người đã đăng nhập
        var listnguoidung=[]
        var nguoidung={
            "id" : usevalid.userID,
            "name" :usevalid.userName,
            "accname" : usevalid.userAccName,
            "pass" :usevalid.userPass,
            "phone" : usevalid.userPhone,
            "address" : usevalid.userAddress,
            "src" : usevalid.urlAvatar,
            "isAdmin" : usevalid.isAdmin,
         }
         listnguoidung.push(nguoidung)
         localStorage.setItem("data",JSON.stringify(listnguoidung))
    }
    else {
        console.log("chua tim duoc nguoi")
        alert("sai")
    }
}

function sortDefault() {
    $("#product-list-row").empty();
    requestDataAjax("http://localhost:37504/api/Product");
    console.log("sort mới nhất")
}
function sortBanChay() {
    $("#product-list-row").empty();
    requestDataAjax("http://localhost:37504/api/Product/GetSort3ListProductByIDCat?catID=0");
    console.log("sort bán chạy")
}

function sortThapdenCao(){
    $("#product-list-row").empty();
    requestDataAjax("http://localhost:37504/api/Product/GetSort1ListProductByIDCat?catID=0");
    console.log("sort thấp đến cao")
}

function sortCaoDenThap(){
    $("#product-list-row").empty();
    requestDataAjax("http://localhost:37504/api/Product/GetSort2ListProductByIDCat?catID=0");
    console.log("sort cao đến thấp")
}

// Thực hiện hàm logOut sau khi người dùng đăng xuất thì local Storage sẽ xóa dữ liệu của người dùng 
function logOut(){
    localStorage.clear();
}
//neu trong local co du lieu thi hien 



console.log("gio se check xem co ai dang nhap chua ")
let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
console.log("so luong localstorage" + listdata.length)
console.log("Xem thong tin nguoi dung : ")

if(listdata.length==1) shownguoidung()

//neu co du lieu trong local thi hien nguoi dung khong thi hien dang ky 
function shownguoidung(){
    username.innerText = listdata[0].name
    userIMG.src=listdata[0].src
    useraccount.style.display="flex"
    logInOut.style.display="none"
    if(listdata[0].isAdmin) adminManage.style.display="block"
}

// đăng ký
function Regis() {
    modal.style.display = "none";
    if (mk.value == mk2.value){
        requestRegisAcc("http://localhost:37504/api/Users/DangKy?",tk.value,mk.value,sdt.value,dc.value,hvt.value)
        location.reload()
    } else {
        alert("Mật khẩu xác nhận không khớp")
    }
}

// gửi yêu cầu đăng ký
function requestRegisAcc(url, tk, mk, sdt, dc, hvt) {
    $.ajax({
        url: url,
        data: { 
            "taikhoan": tk,
            "matkhau": mk,
            "hvt": hvt,
            "sdt": sdt,
            "dc": dc
          },
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
                alert ("Đăng ký thành công!")
            }
            else {
                alert("Đăng ký thất bại, tài khoản đã tồn tại hoặc dữ liệu điền vào không hợp lệ!")
            }
        },
        error: function (xhr) {

        }
    });
}