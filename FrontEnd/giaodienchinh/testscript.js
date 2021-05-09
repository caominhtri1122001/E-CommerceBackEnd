var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2")
let emailLogin = document.getElementById("emailLogin")
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
    window.location.href = "/detailtest.html?productId=" + id;
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

// Thực hiện hàm đăng nhập 
function checkLogin() {
    modal2.style.display = "none";
    let valid = false;
    let usevalid
    userdata.forEach(function (item) {
        if (emailLogin.value == item.userAccName && passwordLogin.value == item.userPass) {
            valid = true
            usevalid = item
        }
    })
    console.log(usevalid)
    var listdata=[]
    var nguoidung={
        "name" :usevalid.userName,
        "src" : usevalid.urlAvatar,
        "isAdmin" : usevalid.isAdmin
     }
     listdata.push(nguoidung)
     localStorage.setItem("data",JSON.stringify(listdata))

     onclick="openRegister()"
     

    // Đăng nhập thành công lưu người dùng vào local
    if (valid == true) {
        login.style.display = "none"
        user.style.display = "flex"     
        username.innerText = usevalid.userName
        userIMG.src =usevalid.urlAvatar  
        // Nếu là admin thì hiển thị giao diện admin 
        if(usevalid.isAdmin) GUIAdmin()

        // Dùng local để lưu người đã đăng nhập
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

function GUIAdmin(){
    proPrice.style.display="none"
    btnPoppular.style.display="none"
    manageAdmin.style.display="flex"
}
// Sau khi check người dùng là admin sẽ thực hiện thay đổi giao diện admin
proPrice.style.display="block"
btnPoppular.style.display="block"
manageAdmin.style.display="none"
// proPrice.style.display="none"
// btnPoppular.style.display="none"

// Dùng local Storage đẻ lưu dữ liệu 
// var listdata=[]
// var newSTudent={
//     "stt" :1,
//     "name" :"Trương Thị Mỹ Duyên",
//     "major" : "Công nghệ thông tin",
//     "src" : "https://scontent.fdad8-1.fna.fbcdn.net/v/t1.6435-9/82440376_1333037346905603_3222950360930844672_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=174925&_nc_ohc=dTFYgGi3ekcAX9_D8Hq&_nc_ht=scontent.fdad8-1.fna&oh=94979b660ba50170151332133e959a7d&oe=609C12E3"
//  }
//  listdata.push(newSTudent)

//  var newSTudent2={
//     "stt" :2 ,
//     "name" :"Lê Hoàng Ngọc Hân",
//     "major" : "Công nghệ thông tin",
//     "src" : "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.6435-9/150082242_1430472140650096_2994224548256427455_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ijzlDP0lmtYAX8iK-xF&_nc_ht=scontent.fdad3-1.fna&oh=181ebe62574d2af57767852080048b12&oe=609E143B"
//  }
//  listdata.push(newSTudent2)
//  localStorage.setItem("data",JSON.stringify(listdata))
//  var stored = JSON.parse(localStorage.getItem("data"));

// Thực hiện hàm logOut sau khi người dùng đăng xuất thì local Storage sẽ xóa dữ liệu của người dùng 
function logOut(){
    localStorage.clear();
}
//neu trong local co du lieu thi hien 
let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
if(listdata.length==1) shownguoidung()

//neu co du lieu trong local thi hien nguoi dung khong thi hien dang ky 
function shownguoidung(){
    console.log(listdata[0].name)
    username.innerText = listdata[0].name
    userIMG.src=listdata[0].src
    useraccount.style.display="flex"
    logInOut.style.display="none"
}