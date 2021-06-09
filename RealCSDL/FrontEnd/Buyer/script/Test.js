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


console.log(UID)


$(document).ready(function () {
    console.log("ready!");
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

//Load data khi không có đơn hàng



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
        for (var i = 0; i < ods.length; i++) {
            console.log('hihidhi')
            var ordersHTML = `
            <div class="order">
                            <div class=" container">
                                <div class="row tagOrder">
                                    <div class="col-4">
                                        <div class="tag-order tagContact">
                                                <i class="far fa-comments"></i>
                                                <p>Chat</p>
                                        </div>
                                        <div class="tag-order tagLink">
                                            <i class="far fa-comments"></i>
                                            <p>Xem shop</p>
                                        </div>
                                    </div>
                                    <div class="col-8 d-flex justify-content-end">
                                        <div class="deliStatus">
                                            <div class="icon-deli">
                                                <i class="fas fa-truck"></i>
                                            </div>
                                            <div class="status">
                                                Đơn hàng đã đến kho Đà Nẵng
                                            </div>
                                            <div class="icon-question">
                                                <i class="far fa-question-circle"></i>
                                            </div>
                                        </div>
                                        <div class="orderStatus">
                                            <p>Đang giao</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row orderDetail">
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                                        <div class="orderIMG">
                                            <img src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-9/194111536_2574791066158262_280737660782328113_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=730e14&_nc_ohc=2S-ZirbVUvkAX_DOrqx&_nc_ht=scontent.fhan14-1.fna&oh=012e22b4b75a3360beeccc45b8acf41c&oe=60E4D3C4" alt="sanpham">
                                        </div>
                                    </div>
                                    <div class="col-8 col-sm-8 col-md-8 col-lg-8">
                                        <div class="orderInfor">
                                            <div class="nameOrder"><p>${ods[i].proName}</p></div>
                                            <div class="nameBrand"><p>N7-Clothing</p></div>
                                            <div class="count"><p>x${ods[i].proNum}</p></div>
                                        </div>
                                    </div>
                                    <div class="col-2 col-sm-2 col-md-2 col-lg-2">
                                        <div class="priceOrder">
                                            <div class="oldPrice"><p>44.000</p></div>
                                        <div class="newPrice"><p>9.0000</p></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row orderConfirm">
                                    <div class="col-12 col-sm-12 col-md-12 col-lg-12 d-flex justify-content-end">
                                        <div class="priceConfirm">
                                            <svg width="16" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.94 1.664s.492 5.81-1.35 9.548c0 0-.786 1.42-1.948 2.322 0 0-1.644 1.256-4.642 2.561V0s2.892 1.813 7.94 1.664zm-15.88 0C5.107 1.813 8 0 8 0v16.095c-2.998-1.305-4.642-2.56-4.642-2.56-1.162-.903-1.947-2.323-1.947-2.323C-.432 7.474.059 1.664.059 1.664z" fill="url(#paint0_linear)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.073 6.905s-1.09-.414-.735-1.293c0 0 .255-.633 1.06-.348l4.84 2.55c.374-2.013.286-4.009.286-4.009-3.514.093-5.527-1.21-5.527-1.21s-2.01 1.306-5.521 1.213c0 0-.06 1.352.127 2.955l5.023 2.59s1.09.42.693 1.213c0 0-.285.572-1.09.28L2.928 8.593c.126.502.285.99.488 1.43 0 0 .456.922 1.233 1.56 0 0 1.264 1.126 3.348 1.941 2.087-.813 3.352-1.963 3.352-1.963.785-.66 1.235-1.556 1.235-1.556a6.99 6.99 0 00.252-.632L8.073 6.905z" fill="#FEFEFE"></path><defs><linearGradient id="paint0_linear" x1="8" y1="0" x2="8" y2="16.095" gradientUnits="userSpaceOnUse"><stop stop-color="#F53D2D"></stop><stop offset="1" stop-color="#F63"></stop></linearGradient></defs></svg>
                                            <p style="padding-left:5px">Tổng số tiền: </p>
                                            <p class="totalPrice">16500</p>
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