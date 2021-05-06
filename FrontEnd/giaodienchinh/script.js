var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2")
let emailLogin = document.getElementById("emailLogin")
var login = document.getElementById("logInOut")
var user = document.getElementById("useraccount")
let username = document.getElementById("header__navbar-user-name")


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
    window.location.href = "/detail.html?productId=" + id;
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

var span = document.getElementsByClassName("close")[0];

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
    console.log("thuc hien userdata")
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
    console.log("thuc hien ham checkdata")
    for (i = 0; i < data.length; i++) {
        userdata.push(data[i])
    }
    console.log("user name trong ham checkdata: ")
    console.log(userdata)
}

// Thực hiện lấy dữ liệu sau đó hiện lên 
function checkLogin() {
    // alert("duyen")
    // alert(emailLogin.value)
    // alert(passwordLogin.value)
    modal2.style.display = "none";
    console.log("trong ham check Login")
    let valid = false;
    let usevalid
    userdata.forEach(function (item) {
        if (emailLogin.value == item.userAccName && passwordLogin.value == item.userPass) {
            valid = true
            usevalid = item
        }
    })
    if (valid == true) {
        login.style.display = "none"
        user.style.display = "flex"
        console.log(username.innerText)
        console.log("nguoi dung dung")
        console.log(usevalid)
        username.innerText = usevalid.userName
    }
    else alert("sai")
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