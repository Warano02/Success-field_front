/**
 * Ceci est le script de la page index du dossier setting dans pages
 */

let items = document.querySelectorAll(".item");
let i = 0;
items[0].remove;

let t = setInterval(() => {
  i++;
  if (i == 5) {
    items[0].classList.remove("active");
    items[1].classList.add("active");
  } else if (i == 10) {
    items[1].classList.remove("active");
    items[1].classList.add("ok");
    items[2].classList.add("active");
  } else if (i == 15) {
    items[2].classList.remove("active");
    items[2].classList.add("ok");
    items[3].classList.add("active");
  } else if (i == 20) {
    items[3].classList.remove("active");
    items[3].classList.add("ok");
    clearInterval(t);
    window.location.href="./data/pages/"
  }
}, 1000);
