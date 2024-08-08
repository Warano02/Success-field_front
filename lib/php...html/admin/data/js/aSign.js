// script pour inscription.php comnce ici
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");
var form3 = document.getElementById("form3");
var next1 = document.getElementById("next1");
var next2 = document.getElementById("next2");
var back1 = document.getElementById("back1");
var back2 = document.getElementById("back2");
var progress = document.getElementById("progress");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
let pwr = document.getElementById("pwr");
let cpwr = document.getElementById("cpwr");
let submit = document.getElementById("submit");
let username = document.getElementById("username");
let matiere = document.getElementById("matiere");
let userbirthday = document.getElementById("userbirthday");
let userplace = document.getElementById("userplace");
let usermail = document.getElementById("usermail");
let terminer = document.getElementById("terminer");
let usernumber = document.getElementById("usernumber");
let userrecuperations = document.getElementById("userrecuperations");

import { lsville } from "./lsville.js";
import { vE,tel,find } from "../../../users/data/js/fctn.js";

sessionStorage.setItem("listville", JSON.stringify(lsville));

//cette onction permet de veirier si un numeros du cameroun est valide

next1.onclick = function (event) {
  if (username.value === "" || matiere.value === "" || userplace === "") {
    alert("veuillez remplir les champs requis ci dessus");
  } else if (
    !find(JSON.parse(sessionStorage.getItem("listville")), userplace.value)
  ) {
    alert(
      "Très chers " +
        username.value +
        " la ville " +
        "<" +
        userplace.value +
        "> que vous avez entrer n'as pas d'universiter. Vueillez entrer une ville correct"
    );
  } else {
    form1.style.left = "-450px";
    form2.style.left = "40px";
    progress.style.width = "240px";
    localStorage.setItem("nom", username.value);
    localStorage.setItem("matiere", matiere.value);
    localStorage.setItem("ville", userplace.value);
    event.preventDefault();
  }
};

back1.onclick = function () {
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
};
next2.onclick = function (event) {
  if (
    usernumber.value === "" ||
    userrecuperations.value === "" ||
    usermail === ""
  ) {
    alert("Veuillez remplire tout les champs y compris le second numero ");
  } else if (!tel(usernumber.value)) {
    alert(
      "Le numero de telephone " +
        usernumber.value +
        " que vous avez enter est invalide"
    );
  } else if (!vE(usermail.value)) {
    alert(`l'email ${usermail.value}  n'est pas correct. Veuillez la verifier`);
  } else {
    form2.style.left = "-450px";
    form3.style.left = "40px";
    progress.style.width = "360px";
    localStorage.setItem("ndt", usernumber.value);
    localStorage.setItem("email", usermail.value);
    event.preventDefault();
  }
};
back2.onclick = function () {
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
};
// debut de la verifiction d la qualiter du mot de passe
pwr.onfocus = function () {
  document.getElementById("message").style.display = "block";
};
pwr.onblur = function () {
  document.getElementById("message").style.display = "none";
};
pwr.onkeyup = function () {
  var lowerCaseLetters = /[a-z]/g;
  if (pwr.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  var upperCaseLetters = /[A-Z]/g;
  if (pwr.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  var numbers = /[0-9]/g;
  if (pwr.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  if (pwr.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
};
form3.addEventListener("submit", function (event) {
  if (
    !letter.classList.contains("valid") ||
    !capital.classList.contains("valid") ||
    !number.classList.contains("valid") ||
    !length.classList.contains("valid")
  ) {
    event.preventDefault(); // Empêche l'envoi du formulaire
    alert("Veuillez remplir correctement le mot de passe.");
  } else {
    if (pwr.value !== cpwr.value) {
      event.preventDefault();
      alert("Les mots de passe ne correspondent pas. Réessayez...");
    } else {
      alert("Le formulaire peut être envoyé.");

      localStorage.setItem("mdp", pwr.value);
      const nom = localStorage.getItem("nom");
      const matiere = localStorage.getItem("matiere");
      const ville = localStorage.getItem("ville");
      const ndt = localStorage.getItem("ndt");
      const email = localStorage.getItem("email");
      const mdp = localStorage.getItem("mdp");

      const users = [nom, matiere, ville, ndt, email, mdp];
      console.log(users);
      const userIndata = JSON.stringify(users);
      document.cookie = `userIndata=${userIndata};expires=Date(2030-02-20);path=/`;
      localStorage.clear();

      event.preventDefault();
      window.location.href = "../../../wait/wait00.php";
    }
  }
});

let voir = document.getElementById("imo");

voir.onpointerover = () => {
  voir.src = "../data/img/voir.jpg";
  pwr.setAttribute("type", "test");
};
voir.onpointerleave = () => {
  voir.src = "../data/img/cacher.jpg";
  pwr.setAttribute("type", "password");
};
let cacher = document.getElementById("img2");
cacher.onpointerover = () => {
  cacher.src = "../data/img/voir.jpg";
  cpwr.setAttribute("type", "test");
};
cacher.onpointerleave = () => {
  cacher.src = "../data/img/cacher.jpg";
  cpwr.setAttribute("type", "password");
};
