function rain() {
  let quantite = 335;
  let body = document.querySelector("body");
  let i = 0;
  while (i < quantite) {
    let goute = document.createElement("i");
    let size = Math.random() * 5;
    let posX = Math.floor(Math.random() * window.innerWidth);
    let delai = Math.random() * -20;
    let duree = Math.random() * 5;
    goute.style.width = 0.2 + size + "px";
    goute.style.left = posX + "px";
    goute.style.animationDelay = delai + "s";
    goute.style.animationDuration = 0.5 + duree + "s";
    body.appendChild(goute);
    i++;
  }
}
let i = 0;
rain();
let t= setInterval(() => {
  i++;
  console.log(i);
  if (i == 10) {
    clearInterval(t)
    window.location.href = "./data/pages/";
  }
}, 1000);
