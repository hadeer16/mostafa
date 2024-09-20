let menu =document.querySelector(".menuicon");
let list =document.querySelector(".list");
let close=document.querySelector(".close")
let nav =document.querySelector("nav")
menu.addEventListener("click" , function(){
    list.style.display="block";
    list.style.right=0;
menu.style.display="none";
close.style.display="block";
})
close.addEventListener("click", function(){
list.style.display="none";
menu.style.display="block";
close.style.display="none";
})
window.onscroll=function(){
    if(window.pageYOffset > 800){
        nav.classList.add("fixed")
    }
    else{
        nav.classList.remove("fixed")
    }
}








