var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2")
var login = document.getElementById("logInOut")
var user = document.getElementById("useraccount")
let username = document.getElementById("header__navbar-user-name")
let userIMG=document.getElementById("userIMG")


var proPrice=document.getElementById("proPrice")
var manageAdmin=document.getElementById("manageAdmin")
var manageUser=document.getElementById("manageUser")
var manageProduct=document.getElementById("manageProduct")
var btnPoppular=document.getElementById("btnPoppular")
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
    window.location.href = "/demothu/detailtest.html?productId=" + id;
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
                                        <span class="home-product-item__price-old"> đ${product.proOldPrice}</span>
                                        <span class="home-product-item__price-current"> đ${product.proPrice} </span>
                                    </div>
                                    <div class="home-product-item__action">
                                        <div class="home-product-item__rating">
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="home-product-item__star--gold fas fa-star"></i>
                                            <i class="fas fa-star"></i>
                                        </div>
                                        <span class="home-product-item__sold"> 12 đã bán </span>
                                    </div>
                                    <div class="product-favourite">
                                        <i class="fas fa-check"></i>
                                        <span> Yêu thích </span>
                                    </div>
                                    <div class="product-sale-off">
                                        <span class="product-sale-off__percent"> 23% </span>
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
//Thực hiện hàm khi bấm chỗ đăng nhập trong form sẵn
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
        if(usevalid.isAdmin) GUIAdmin()
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


function sortBanChay() {
    requestDataAjax("http://localhost:37504/api/Product/GetSort3ListProductByIDCat?catID=0");
}

function sortThapdenCao(){
    requestDataAjax("http://localhost:37504/api/Product/GetSort1ListProductByIDCat?catID=0");
}

function sortCaoDenThap(){
    requestDataAjax("http://localhost:37504/api/Product/GetSort2ListProductByIDCat?catID=0");
}

function GUIAdmin(){
    proPrice.style.display="none"
    btnPoppular.style.display="none"
    manageAdmin.style.display="flex"
}
// Sau khi check người dùng là admin sẽ thực hiện thay đổi giao diện admin
proPrice.style.display="block"
btnPoppular.style.display="block"
manageAdmin.style.display="none"

// Thực hiện hàm logOut sau khi người dùng đăng xuất thì local Storage sẽ xóa dữ liệu của người dùng 
function logOut(){
    localStorage.clear();
}
//neu trong local co du lieu thi hien 


let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
if(listdata.length==1) shownguoidung()
console.log("co nguoi dang dang nhap hay khong " + listdata.length)

//neu co du lieu trong local thi hien nguoi dung khong thi hien dang ky 
function shownguoidung(){
    username.innerText = listdata[0].name
    userIMG.src=listdata[0].src
    useraccount.style.display="flex"
    logInOut.style.display="none"
}

