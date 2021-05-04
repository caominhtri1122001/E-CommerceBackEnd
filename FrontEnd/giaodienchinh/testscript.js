var modal = document.getElementById("myModal");
var modal2=document.getElementById("myModal2")

// Get the button that opens the modal

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 

// When the user clicks on <span> (x), close the modal
function openRegister(){
    modal.style.display = "block";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal||event.target==modal2) {
    modal.style.display = "none";
    modal2.style.display = "none";
  }
}

//Đăng nhập
function openLogInOut(){
  modal2.style.display = "block";
}
//Thực hiện hàm khi bấm chỗ đăng nhập trong form sẵn
function changeToLogin(){
  modal.style.display = "none";
  modal2.style.display = "block";
}
function changeToRegister(){
  modal.style.display = "block";
  modal2.style.display = "none";
}