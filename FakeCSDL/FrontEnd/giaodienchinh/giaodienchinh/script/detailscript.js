var username=document.getElementById("header__navbar-user-name")
var useraccount=document.getElementById("useraccount")
var logInOut=document.getElementById("logInOut")
let userIMG=document.getElementById("userIMG")
var adminEdit=document.getElementById("adminEdit")
var modal = document.getElementById("myModal");
var modal2 = document.getElementById("myModal2")
let emailLogin = document.getElementById("emailLogin")
var login = document.getElementById("logInOut")
var user = document.getElementById("useraccount")
var adminManage=document.getElementById("adminManage")

var userdata = []

// Theem vao ne 
//ham dang xuat dang nhap hien form 
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
function openRegister(){
  modal.style.display = "block";
}
function openLogInOut(){
    modal2.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal||event.target == modal2) {
    modal.style.display = "none";
    modal2.style.display = "none";
  }
}
//ket thuc dang xuat dang nhap hien form

adminEdit.style.display="none"

function requestDataUser() {
    $.ajax({
        url: "http://localhost:37504/api/Users",
        data: null,
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
                for (i = 0; i < response.data.length; i++) {
                    userdata[i] = (response.data[i])
                }
            }
            else {
                alert(response.message)
            }
        },
        error: function (xhr) {
        }
    });
}


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
                <img src="${proudcts.proLinkPicture3    }" alt="">
                <img src="https://likefit.vn/wp-content/uploads/2020/07/snb3-600x600.jpg" alt="">
                <img src="https://likefit.vn/wp-content/uploads/2020/07/snb3-600x600.jpg" alt="">
            </div>
            <div class="product__sharing-icons hide-on-mobile-tablet">
                <div class="text">Chia s???:</div>
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
                    <span class="product__price-old">${proudcts.proOldPrice/1000}.000??</span>
                    <div class="product__price-current">
                        <span class="product__price-new">${proudcts.proPrice/1000}.000??</span>
                        <span class="product__price-label bgr-orange">${Math.floor((proudcts.proOldPrice-proudcts.proPrice)/proudcts.proOldPrice*100)}%GI???M</span>
                    </div>
                </div>
                <div class="product__price-slogan hide-on-mobile-tablet">
                    <i class="product__price-icon-tag fas fa-tags"></i>
                    <span class="product__price-slogan-text">??? ????u r??? h??n, Minecraft Shop ho??n
                        ti???n</span>
                    <i class="product__price-icon-question far fa-question-circle"></i>
                </div>
            </div> 
            <div class="product-decription">
                <p class="product-detail-item"><strong>M?? t??? s???n ph???m</strong></p>
                <div class="product-detail-text">
                    <p>??? <strong>M?? t???</strong>: ${proudcts.proDescription}</p>
                    <p>??? <strong>Th????ng hi???u</strong>: ${proudcts.proBrand}</p>
                    <p>??? <strong>Xu???t x???</strong>: ${proudcts.proOrigin}</p>
                </div>
            </div>
            <div class="product__qnt hide-on-mobile">
                <label class="product__qnt-label width-label">S??? L?????ng</label>
                <div class="shop__qnt-btns">
                    <button class="soluong">
                        <i class="shop__qnt-btn-icon fas fa-minus"></i>
                    </button>
                    <input class="shop__qnt-input" type="text" value="1" maxlength="4">
                    <button class="soluong" >
                        <i class="shop__qnt-btn-icon fas fa-plus"></i>
                    </button>
                </div>
                <div class="product__qnt-note">
                    <span class="product__qnt-note-num">1100</span>
                    s???n ph???m c?? s???n
                </div>
            </div>
            <div class="product-btns-main">
                <button class="product-btn-main product-btn-main__msg clear-btn hide-on-tablet">
                    <i class="product-btn-main__msg-icon far fa-comment-dots"></i>
                </button>
                <button class="product-btn-main product-btn-main__adding">
                    <i class="product-btn-main__adding-icon fas fa-cart-plus"></i>
                    <span class="product-btn-main__text product-btn-main__adding-text hide-on-mobile">Th??m V??o Gi??? H??ng</span>
                </button>
                <button onclick="document.location.href=this.getAttribute('href');" href="product-cart.html" class="product-btn-main product-btn-main__buying">
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
                        <div class="product__guarantee-text">Minecraft Shop ?????m B???o</div>
                    </div>
                    <span class="product__guarantee-note">3 Ng??y Tr??? H??ng / Ho??n Ti???n</span>
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
    requestDataDetail("http://localhost:37504/api/Product/GetProductByID?proID="+productId);
    requestDataUser("http://localhost:37504/api/Users");

});

console.log("gio se check xem co ai dang nhap chua ")
let listdata=localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):[]
console.log("so luong localstorage" + listdata.length)
console.log("Xem thong tin nguoi dung : ")

if(listdata.length==1) shownguoidung()

//neu co du lieu trong local thi hien nguoi dung khong thi hien dang ky 
function shownguoidung(){
    useraccount.style.display="flex"
    logInOut.style.display="none"
    username.innerText = listdata[0].name
    userIMG.src=listdata[0].src
    if(listdata[0].isAdmin==true) adminManage.style.display="block"
  
}
//N???u nh???n logout th?? data s??? x??a d??? li???u 
function logOut(){
    localStorage.clear();
}
// Sau khi bam dang ky , dang nhap 

//dang nhap tu giao dien detail 
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

// Th???c hi???n h??m ????ng nh???p 
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
    // ????ng nh???p th??nh c??ng l??u ng?????i d??ng v??o local
    if (valid == true) {
        console.log("da tim duoc nguoi")
        login.style.display = "none"
        user.style.display = "flex"     
        username.innerText = usevalid.userName
        userIMG.src =usevalid.urlAvatar  
        // N???u l?? admin th?? hi???n th??? giao di???n admin 
        if(usevalid.isAdmin)  adminEdit.style.display="block"
        // D??ng local ????? l??u ng?????i ???? ????ng nh???p
        var listnguoidung=[]
        var nguoidung={
            "name" :usevalid.userName,
            "src" : usevalid.urlAvatar,
            "isAdmin" : usevalid.isAdmin
         }
         listnguoidung.push(nguoidung)
         localStorage.setItem("data",JSON.stringify(listnguoidung))
    }
    else {
        console.log("chua tim duoc nguoi")
        alert("sai")
    }
}


// ????ng k??
function Regis() {
    modal.style.display = "none";
    if (mk.value == mk2.value){
        requestRegisAcc("http://localhost:37504/api/Users/DangKy?",tk.value,mk.value,sdt.value,dc.value,hvt.value)
        location.reload()
    } else {
        alert("M???t kh???u x??c nh???n kh??ng kh???p")
    }
}

// g???i y??u c???u ????ng k??
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
                alert ("????ng k?? th??nh c??ng!")
            }
            else {
                alert("????ng k?? th???t b???i, t??i kho???n ???? t???n t???i ho???c d??? li???u ??i???n v??o kh??ng h???p l???!")
            }
        },
        error: function (xhr) {

        }
    });
}

// chuy???n ?????i form ????ng nh???p / ????ng k??
function changeToRegister() {
    modal.style.display = "block";
    modal2.style.display = "none";
}
function changeToLogin() {
    modal.style.display = "none";
    modal2.style.display = "block";
}