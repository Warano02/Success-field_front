/**
 * Script pour la page ../pages/admin/produit/delete.php
 */
const id = (mot) => {
  let i = mot.indexOf("=") + 1,
    t = "";
  for (; i < mot.length; i++) {
    t += mot[i];
  }
  return t;
};
let ID = id(window.location.href);

const hjx = new XMLHttpRequest();
hjx.open("GET", `../../../config/php/produit.php?jeveux=${ID}`, true);
hjx.onloadend = () => {
  let donne = JSON.parse(hjx.responseText);
  document.getElementById("title").textContent = donne.nom;
  document.getElementById("img").src = donne.image;
  document.getElementById("desc").textContent = donne.description;
  document.getElementById("amount").textContent = `${donne.prix * 650}F`;
};
hjx.send();
const xhr = new XMLHttpRequest();
xhr.open("GET", `../../../config/php/produit.php?id=${ID}&&delete=stp`, true);
xhr.onloadend = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    alert(JSON.parse(xhr.responseText));
    window.location.href = "../";
  } else {
    alert("Une erreur a innatendue a été detecter. veuillez réesayer");
  }
};
document.getElementById("annule").onclick = () =>
  (window.location.href = "../");

document.getElementById("del").onclick = () => {
  let answer = confirm(
    "Vous êtes sur le point de supprimer définitivement ce produit. Cliquez sur OK pour Supprimer"
  );
  if (answer) {
    xhr.send();
  }
};
