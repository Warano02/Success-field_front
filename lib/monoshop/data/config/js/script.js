/**
 * Ceci est le script de la page index du dossier monoshop
 */

let i = 0;
const xhr = new XMLHttpRequest();
xhr.open("GET", "./data/config/php/index.php", true);
xhr.onloadend = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const reponse = JSON.parse(xhr.responseText);
    if (reponse.confirm) {
      alert("plus qu'un instant");
      window.location.href = "./data/";
    } else {
      alert(
        "Il semble que votre email ne soit confirmer. Veuillez la confirmer afin d'acceder a la boutique pour plus de securiter"
      );
      window.location.href = "./data/pages/setting/index.php";
    }
  }
};
xhr.send()
let t = setInterval(() => {
  if (i == 10) {
    clearInterval(t);
    xhr.send();
  }
  i++;
}, 1000);
