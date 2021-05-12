// Load dữ liệu cho thàng table 
console.log("truong my duyen")

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
    if(id == 0) {
        // hiện form add để điền thông tin sp
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
    for(var i=proudcts.length-1;i>=0;i--){

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
                            ${proudcts[i].proBrand}
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
    requestDataListProduct("http://localhost:37504/api/Product");
});

