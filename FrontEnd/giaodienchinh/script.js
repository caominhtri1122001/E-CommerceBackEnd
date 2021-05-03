console.log("####   ")
console.log("dunei truongn")
let log=document.getElementById("auth-form")
let model=document.querySelector(".modal")
let container=document.querySelector(".app")
let header=document.getElementById("header")
let content=document.getElementById("app__container")
//     background-color: #8e8e91;
// opacity: 0.8;
function shadowIndex(){
  container.style.opacity="0.5"
  content.style.backgroundColor="#8e8e91"
  content.style.opacity="0.8"
  
}
function offshadowIndex(){
  container.style.opacity="1"
  content.style.backgroundColor="#f5f5f5"
  content.style.opacity="1"
}
function openLogInOut(){
  shadowIndex()
  log.style.display="block"
}
