window.addEventListener("scroll",()=>{
    let nav = document.querySelector("nav");
    nav.style.backgroundColor = "#fff";
    nav.style.transition = "0.5s";
   for(var i = 0;i<7;i++){
    document.querySelectorAll(".link-element")[i].style.color = "#6c757d";
   }

   if(window.scrollY == 0){
    nav.style.backgroundColor = "transparent";
    for(var i = 0;i<7;i++){
        document.querySelectorAll(".link-element")[i].style.color = "#fff";
       }
   }
})


window.addEventListener("scroll",()=>{
    let bottomNavbar = document.querySelector(".bottom-navbar");
    let bottomLink = document.querySelector(".bottom-link");
    let bar = document.getElementById("bars");
    bottomNavbar.style.backgroundColor = "#fff";
    
    bottomNavbar.style.transition = "0.5s";

    bottomLink.style.color = "#000";

    bar.style.color = "#000";
    



   if(window.scrollY == 0){
    bottomNavbar.style.backgroundColor = "transparent";
    bottomLink.style.color = "#fff";
    bar.style.color = "#fff";
   }
})










//Main

let main = document.querySelector(".main");
main.style.color = "#fff";
main.style.backgroundColor = "#f5a637";
main.addEventListener("click",()=>{
    main.style.color = "#fff";
main.style.backgroundColor = "#f5a637";

lunch.style.color = "#6c757d";
lunch.style.backgroundColor = "transparent";
drinks.style.color = "#6c757d";
drinks.style.backgroundColor = "transparent";
dinner.style.color = "#6c757d";
dinner.style.backgroundColor = "transparent";



let menuWrapper1 = document.querySelector(".menu-wrapper1");
let menuWrapper2 = document.querySelector(".menu-wrapper2")
let menuWrapper3 = document.querySelector(".menu-wrapper3");
let menuWrapper4 = document.querySelector(".menu-wrapper4");




menuWrapper1.style.display = "flex";

menuWrapper2.style.display = "none";

menuWrapper3.style.display = "none";

menuWrapper4.style.display = "none";




})

//Lunch

let lunch = document.querySelector(".lunch");

lunch.addEventListener("click",()=>{
    lunch.style.color = "#fff";
lunch.style.backgroundColor = "#f5a637";

main.style.color = "#6c757d";
main.style.backgroundColor = "transparent";
dinner.style.color = "#6c757d";
dinner.style.backgroundColor = "transparent";
drinks.style.color = "#6c757d";
drinks.style.backgroundColor = "transparent";


let menuWrapper1 = document.querySelector(".menu-wrapper1");
let menuWrapper2 = document.querySelector(".menu-wrapper2")
let menuWrapper3 = document.querySelector(".menu-wrapper3");
let menuWrapper4 = document.querySelector(".menu-wrapper4");




menuWrapper1.style.display = "none";

menuWrapper2.style.display = "flex";

menuWrapper3.style.display = "none";

menuWrapper4.style.display = "none";









})


//DINNER

let dinner = document.querySelector(".dinner");

dinner.addEventListener("click",()=>{
    dinner.style.color = "#fff";
dinner.style.backgroundColor = "#f5a637";




main.style.color = "#6c757d";
main.style.backgroundColor = "transparent";

lunch.style.color = "#6c757d";
lunch.style.backgroundColor = "transparent";

drinks.style.color = "#6c757d";
drinks.style.backgroundColor = "transparent";


let menuWrapper1 = document.querySelector(".menu-wrapper1");
let menuWrapper2 = document.querySelector(".menu-wrapper2")
let menuWrapper3 = document.querySelector(".menu-wrapper3");
let menuWrapper4 = document.querySelector(".menu-wrapper4");




menuWrapper1.style.display = "none";

menuWrapper2.style.display = "none";

menuWrapper3.style.display = "flex";

menuWrapper4.style.display = "none";









})



//DRINKS

let drinks = document.querySelector(".drinks");
drinks.addEventListener("click",()=>{
    drinks.style.color = "#fff";
drinks.style.backgroundColor = "#f5a637";
main.style.color = "#6c757d";
main.style.backgroundColor = "transparent";
lunch.style.color = "#6c757d";
lunch.style.backgroundColor = "transparent";
dinner.style.color = "#6c757d";
dinner.style.backgroundColor = "transparent";


let menuWrapper1 = document.querySelector(".menu-wrapper1");
let menuWrapper2 = document.querySelector(".menu-wrapper2")
let menuWrapper3 = document.querySelector(".menu-wrapper3");
let menuWrapper4 = document.querySelector(".menu-wrapper4");





menuWrapper1.style.display = "none";

menuWrapper2.style.display = "none";

menuWrapper3.style.display = "none";

menuWrapper4.style.display = "flex";











})











// Testimonials is here







let left = document.getElementById("left");

left.addEventListener("click",()=>{
    let test1 = document.getElementById("test1");
    let test2 = document.getElementById("test2");
    let test3 = document.getElementById("test3");

test1.style.display="none";
test2.style.display="flex";
test3.style.display="none";
})


let right = document.getElementById("right");



right.addEventListener("click",()=>{
    let test1 = document.getElementById("test1");
    let test2 = document.getElementById("test2");
    let test3 = document.getElementById("test3");

test1.style.display="none";
test2.style.display="none";
test3.style.display="flex";
})









let left1 = document.getElementById("left1");

left1.addEventListener("click",()=>{
    let test1 = document.getElementById("test1");
    let test2 = document.getElementById("test2");
    let test3 = document.getElementById("test3");

test1.style.display="none";
test2.style.display="none";
test3.style.display="flex";
})


let right1 = document.getElementById("right1");



right1.addEventListener("click",()=>{
    let test1 = document.getElementById("test1");
    let test2 = document.getElementById("test2");
    let test3 = document.getElementById("test3");

test1.style.display="flex";
test2.style.display="none";
test3.style.display="none";
})



let left2 = document.getElementById("left2");

left2.addEventListener("click",()=>{
    let test1 = document.getElementById("test1");
    let test2 = document.getElementById("test2");
    let test3 = document.getElementById("test3");

test1.style.display="flex";
test2.style.display="none";
test3.style.display="none";
})


let right2 = document.getElementById("right2");



right2.addEventListener("click",()=>{
    let test1 = document.getElementById("test1");
    let test2 = document.getElementById("test2");
    let test3 = document.getElementById("test3");

test1.style.display="none";
test2.style.display="flex";
test3.style.display="none";
})











let bars = document.getElementById("bars");



bars.addEventListener("click",()=>{
    let sideBar = document.querySelector(".sideBar");
    sideBar.style.transform = "translateY(0)";
    sideBar.style.transition = "0.5s";
})



let times = document.getElementById("times");



times.addEventListener("click",()=>{
    let sideBar = document.querySelector(".sideBar");
    sideBar.style.transform = "translateY(-100%)";
    sideBar.style.transition = "0.5s";
})

