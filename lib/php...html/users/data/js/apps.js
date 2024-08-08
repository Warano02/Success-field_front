import { verif, verifNiveau, verifie, vE, tel } from "./fctn.js";
let voir = document.getElementById("im1");
let mdp1 = document.getElementById("mdp1");
let mdp2 = document.getElementById("mdp2");
let load = document.querySelector(".load");
const date = new Date();
let form = document.getElementById("myForm");
date.setDate(date.getDate() + 1);

voir.onpointerover = () => {
  voir.src = "./data/img/voir.jpg";
  mdp1.setAttribute("type", "text");
};
voir.onpointerleave = () => {
  voir.src = "./data/img/cacher.jpg";
  mdp1.setAttribute("type", "password");
};
let cacher = document.getElementById("img2");
cacher.onpointerover = () => {
  cacher.src = "./data/img/voir.jpg";
  mdp2.setAttribute("type", "text");
};
cacher.onpointerleave = () => {
  cacher.src = "./data/img/cacher.jpg";
  mdp2.setAttribute("type", "password");
};

let level = document.getElementById("level");
let mail = document.getElementById("mail");
/*
Gestion du formulire

*/

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!vE(mail.value)) {
    alert(`L'email ${mail.value} n'est pas correct !`);
  } else if (!verifNiveau(level.value)) {
    alert("Veuillez entrer un niveau d'étude correct");
  } else if (!verif(mdp1.value)) {
    alert(
      "le mot que vous avez entrer est trop court. Entrer un password robuste de minimum 8 charactère"
    );
  } else if (!verifie(mdp1.value, mdp2.value)) {
    alert(
      "les mots de passes que vous avez entrer ne correspondent pas. verifier..."
    );
  } else if (!tel(document.getElementById("tel").value)) {
    alert(
      `Le numeros ${document.getElementById("tel").value} n'est pas valide`
    );
  } else {
    alert("Votre demande d'inscription est en cours de traitement...");
    const formule = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "./data/php/t1.php", true);
    xhr.onloadend = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        let res = JSON.parse(xhr.response);
        if (res.statut === 0) {
          alert("votre inscription a bien été effectuer.😍😍");
          localStorage.setItem('tempon', JSON.stringify({ "email": mail.value, "role": "user" }))
          window.location.href = "../";
        } else {
          alert(`Un utilisateur avec l'emil ${mail.value} existe déjà sur cette platforme.`);
        }
      } else {
        alert(
          "Une erreur s'est produite lors du traitement de vos donnne. Merci de réesayer 😅😉"
        );
      }
    };
    xhr.send(formule);
  }
});
