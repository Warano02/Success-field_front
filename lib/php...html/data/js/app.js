let navItems = document.querySelector(".nav_items");
let openBton = document.getElementById("open_nav");
let closeBton = document.getElementById("close_nav");
let hide = document.getElementById("hide_btn");
let shown = document.getElementById("show_btn");
let aside = document.querySelector("aside");
let socialBar = document.querySelector(".team_social-links");

closeBton.addEventListener("click", () => {
  navItems.style.display = "none";
  openBton.style.display = "inline-block";
  closeBton.style.display = "none";
});
openBton.addEventListener("click", () => {
  navItems.style.display = "flex";
  openBton.style.display = "none";
  closeBton.style.display = "inline-block";
});
let download = JSON.parse(localStorage.getItem("doawnload"));
if (download === null) {
  window.location.href = "../";
} else {
  let affiche = `<div class="container post_unique-container">
            <h2>${download.matiere}</h2>
            <div class="post_author">
                <div class="post_author-info">
                    <h5>Filiere : Informatique</h5>
                    <p>Niveau :${download.niveau}</p>
                </div>
            </div>
            <div class="post_unique-thumbail">
                <img src="./img/pdf.jpg" alt="">
            </div>
            <p>${download.desc}</p>
            <h4>Par : ${download.par}</h4>
            <a href="../../api/app/data/success-subject/${download.source}" class="btn download">Telecharger</a>
        </div>`;
  document.getElementById("subject").insertAdjacentHTML("beforeend", affiche);
}
