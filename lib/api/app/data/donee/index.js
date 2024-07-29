let navItems = document.querySelector(".nav_items");
let openBtn = document.querySelector("#open_nav");
let closeBtn = document.querySelector("#close_nav");
let hide = document.querySelector("#hide_btn");
let show = document.querySelector("#show_btn");
let aside = document.querySelector("aside");
let socialBar = document.querySelector(".team_social-links");

closeBtn.onclick = ()=>{
    navItems.style.display = "none";
    openBtn.style.display = "inline-block";
    closeBtn.style.display = "none";
}
openBtn.onclick = ()=>{
    navItems.style.display = "flex";
    openBtn.style.display = "none";
    closeBtn.style.display = "inline-block";
}
show.onclick = ()=>{
    aside.style.left = "0";
    show.style.display = "none";
    hide.style.display = "inline-block";
}
hide.onclick = ()=>{
    aside.style.left = "-100%";
    show.style.display = "inline-block";
    hide.style.display = "none";
}
socialBar.onmove