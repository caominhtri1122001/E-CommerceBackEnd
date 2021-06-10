let listdata = localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []
var UID = listdata[0].id;


let noOrder=` <div class="container no-order">
<div class="row">
    <div class="col-12 col-sm-12 col-md-12 col-lg-12">
        <div class="no-order-inner">
            <i class="fas fa-cart-plus"></i>
            <p>Bạn không có đơn hàng nào</p>
        </div>
    </div>
</div>
</div> `

// Hàm đổi tiền 
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0
  })
console.log(formatter.format(1000) )


$(document).ready(function () {
    console.log("ready!");
    if(listdata.length >=0){
        document.getElementById("userIMG").src = listdata[0].srcIMG;
        $("#userName").html(listdata[0].name);
    }
    requestDataOrdersByUID("http://localhost:37504/api/Orders/GetListOrdersByUID?userID=" + UID)
});



function requestDataOrdersByUID(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
                console.log(response.data)
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

var loadData = function (ods) {
    console.log('thuc hien ham load ')
    console.log(ods.length)
    // Nếu không có sản phẩm nào thì hiển thị giao diện không có sản phẩm
    if(ods.length==0){
        console.log('khong co san pham nao')
        $("#listOrders").html(noOrder)
    }
    //Nếu không thì phải hiển thị giao diện khác
    else {
        let noOrder ;
        $("#listOrders").html('');
        for (var i = 0; i < ods.length; i++) {
            if(ods[i].orderStatus==='Đã hủy') noOrder='no-deli'
            else noOrder=''
            var ordersHTML = `
            <div class="order">
                            <div class=" container">
                                <div class="row tagOrder">
                                    <div class="col-4" style="display:flex">
                                        <div class="tag-order tagContact" onclick = "HuyDonHang(${ods[i].orderID})">
                                                <i class="fas fa-trash"></i>
                                                <p >Hủy đơn hàng</p>
                                        </div>

                                        <div class="tag-order tagLink">
                                            <i class="far fa-comments"></i>
                                            <p>Xem shop</p>
                                        </div>
                                    </div>
                                    <div class="col-8 d-flex justify-content-end">
                                        <div class="deliStatus ${noOrder}">
                                            <div class="icon-deli">
                                                <i class="fas fa-truck"></i>
                                            </div>
                                            <div class="status">
                                                Đơn hàng đã đến kho ${ods[i].orderAddress}
                                            </div>
                                            <div class="icon-question">
                                                <i class="far fa-question-circle"></i>
                                            </div>
                                        </div>
                                        <div class="orderStatus">
                                            <p>${ods[i].orderStatus}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row orderDetail">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                                        <div class="orderIMG">
                                            <img src="${ods[i].orderIMG}" alt="sanpham">
                                        </div>
                                    </div>
                                    <div class="col-8 col-sm-8 col-md-8 col-lg-8">
                                        <div class="orderInfor">
                                            <div class="nameOrder"><p>${ods[i].proName}</p></div>
                                            <div class="nameBrand"><p>${ods[i].proBrand}</p></div>
                                            <div class="count"><p>x${ods[i].proNum}</p></div>
                                        </div>
                                    </div>
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                                        <div class="priceOrder">
                                            <div class="oldPrice"><p>${formatter.format(ods[i].proOldPrice)}</p></div>
                                        <div class="newPrice"><p>${formatter.format(ods[i].proPrice)}</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row orderConfirm">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-end">
                                        <div class="priceConfirm">
                                            <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.94 1.664s.492 5.81-1.35 9.548c0 0-.786 1.42-1.948 2.322 0 0-1.644 1.256-4.642 2.561V0s2.892 1.813 7.94 1.664zm-15.88 0C5.107 1.813 8 0 8 0v16.095c-2.998-1.305-4.642-2.56-4.642-2.56-1.162-.903-1.947-2.323-1.947-2.323C-.432 7.474.059 1.664.059 1.664z" fill="url(#paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.073 6.905s-1.09-.414-.735-1.293c0 0 .255-.633 1.06-.348l4.84 2.55c.374-2.013.286-4.009.286-4.009-3.514.093-5.527-1.21-5.527-1.21s-2.01 1.306-5.521 1.213c0 0-.06 1.352.127 2.955l5.023 2.59s1.09.42.693 1.213c0 0-.285.572-1.09.28L2.928 8.593c.126.502.285.99.488 1.43 0 0 .456.922 1.233 1.56 0 0 1.264 1.126 3.348 1.941 2.087-.813 3.352-1.963 3.352-1.963.785-.66 1.235-1.556 1.235-1.556a6.99 6.99 0 00.252-.632L8.073 6.905z" fill="#FEFEFE"></path><defs><linearGradient id="paint0_linear" x1="8" y1="0" x2="8" y2="16.095" gradientUnits="userSpaceOnUse"><stop stop-color="#F53D2D"></stop><stop offset="1" stop-color="#F63"></stop></linearGradient></defs></svg>
                                            <p style="padding-left:5px">Tổng số tiền: </p>
                                            <p class="totalPrice">${formatter.format(ods[i].proPrice)}</p>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <div class="policy">
                                            <p>Bạn hài lòng với sản phẩm đã nhận? Nếu có, chọn "Đã nhận được hàng" nha. Nếu không, vui lòng chọn "Trả hàng/ Hoàn tiền" trước ngày 15-06-2021
                                               nha.</p>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="btnConfirm">
                                            <button type="button" class="btn btn-secondary confirmReceived">Đã nhận được hàng</button>
                                            <button type="button" class="btn btn-secondary">Liên hệ người bán</button>
                                        </div>
                                    </div>
                                       
                                </div>
                            </div>
                        </div> 
                              
        `
        $("#listOrders").append(ordersHTML)
        }
    }
   
}
//Load data những đơn đã hủy 

function showListCancel(){
    requesListCancelOrderByUID("http://localhost:37504/api/Orders/GetListOrdersCancelByUID?userID="+listdata[0].id)
}

function requesListCancelOrderByUID(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "GET",
        success: function (response) {
            if (response.success) {
                console.log(response.data)
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

var loadDataCancel = function (ods) {
    console.log('thuc hien ham load data cancel ')
    console.log(ods.length)
    // Nếu không có sản phẩm nào thì hiển thị giao diện không có sản phẩm
    if(ods.length==0){
        console.log('khong co san pham nao')
        $("#listOrders").html(noOrder)
    }
    //Nếu không thì phải hiển thị giao diện khác
    else {
        let noOrder ;
        for (var i = 0; i < ods.length; i++) {
            if(ods[i].orderStatus==='Đã hủy') noOrder='no-deli'
            else noOrder=''
            var ordersCancelHTML = `
            <div class="order">
                            <div class=" container">
                                <div class="row tagOrder">
                                    <div class="col-4" style="display:flex">
                                        <div class="tag-order tagContact" onclick = "HuyDonHang(${ods[i].orderID})">
                                                <i class="fas fa-trash"></i>
                                                <p >Hủy đơn hàng</p>
                                        </div>

                                        <div class="tag-order tagLink">
                                            <i class="far fa-comments"></i>
                                            <p>Xem shop</p>
                                        </div>
                                    </div>
                                    <div class="col-8 d-flex justify-content-end">
                                        <div class="deliStatus ${noOrder}">
                                            <div class="icon-deli">
                                                <i class="fas fa-truck"></i>
                                            </div>
                                            <div class="status">
                                                Đơn hàng đã đến kho ${ods[i].orderAddress}
                                            </div>
                                            <div class="icon-question">
                                                <i class="far fa-question-circle"></i>
                                            </div>
                                        </div>
                                        <div class="orderStatus">
                                            <p>${ods[i].orderStatus}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row orderDetail">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                                        <div class="orderIMG">
                                            <img src="${ods[i].orderIMG}" alt="sanpham">
                                        </div>
                                    </div>
                                    <div class="col-8 col-sm-8 col-md-8 col-lg-8">
                                        <div class="orderInfor">
                                            <div class="nameOrder"><p>${ods[i].proName}</p></div>
                                            <div class="nameBrand"><p>${ods[i].proBrand}</p></div>
                                            <div class="count"><p>x${ods[i].proNum}</p></div>
                                        </div>
                                    </div>
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                                        <div class="priceOrder">
                                            <div class="oldPrice"><p>${formatter.format(ods[i].proOldPrice)}</p></div>
                                        <div class="newPrice"><p>${formatter.format(ods[i].proPrice)}</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row orderConfirm">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-end">
                                        <div class="priceConfirm">
                                            <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.94 1.664s.492 5.81-1.35 9.548c0 0-.786 1.42-1.948 2.322 0 0-1.644 1.256-4.642 2.561V0s2.892 1.813 7.94 1.664zm-15.88 0C5.107 1.813 8 0 8 0v16.095c-2.998-1.305-4.642-2.56-4.642-2.56-1.162-.903-1.947-2.323-1.947-2.323C-.432 7.474.059 1.664.059 1.664z" fill="url(#paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.073 6.905s-1.09-.414-.735-1.293c0 0 .255-.633 1.06-.348l4.84 2.55c.374-2.013.286-4.009.286-4.009-3.514.093-5.527-1.21-5.527-1.21s-2.01 1.306-5.521 1.213c0 0-.06 1.352.127 2.955l5.023 2.59s1.09.42.693 1.213c0 0-.285.572-1.09.28L2.928 8.593c.126.502.285.99.488 1.43 0 0 .456.922 1.233 1.56 0 0 1.264 1.126 3.348 1.941 2.087-.813 3.352-1.963 3.352-1.963.785-.66 1.235-1.556 1.235-1.556a6.99 6.99 0 00.252-.632L8.073 6.905z" fill="#FEFEFE"></path><defs><linearGradient id="paint0_linear" x1="8" y1="0" x2="8" y2="16.095" gradientUnits="userSpaceOnUse"><stop stop-color="#F53D2D"></stop><stop offset="1" stop-color="#F63"></stop></linearGradient></defs></svg>
                                            <p style="padding-left:5px">Tổng số tiền: </p>
                                            <p class="totalPrice">${formatter.format(ods[i].proPrice)}</p>
                                        </div>
                                    </div>
                                    <div class="col-7">
                                        <div class="policy">
                                            <p>Bạn hài lòng với sản phẩm đã nhận? Nếu có, chọn "Đã nhận được hàng" nha. Nếu không, vui lòng chọn "Trả hàng/ Hoàn tiền" trước ngày 15-06-2021
                                               nha.</p>
                                        </div>
                                    </div>
                                    <div class="col-5">
                                        <div class="btnConfirm">
                                            <button type="button" class="btn btn-secondary confirmReceived">Đã nhận được hàng</button>
                                            <button type="button" class="btn btn-secondary">Liên hệ người bán</button>
                                        </div>
                                    </div>
                                       
                                </div>
                            </div>
                        </div> 
                              
        `
        $("#listOrders").innerHTML='sdsdsd'
        $("#listOrders").html(ordersCancelHTML);

        }
    }
   
}

// End load data ddax huy 




// thực hiện việc hủy đơn hàng 
function HuyDonHang(id) {
    requestCancelOrdersByID("http://localhost:37504/api/Orders/HuyDonHang?orID=" + id)
    console.log(id)
}
function requestCancelOrdersByID(url) {
    $.ajax({
        url: url,
        data: null,
        cache: false,
        type: "DELETE",
        success: function (response) {
            if (response.success) {
                console.log("chạy được")
                location.reload()
            }
            else {
                alert("Đã Hủy đơn hàng!")
            }
        },
        error: function (xhr) {

        }
    });
}