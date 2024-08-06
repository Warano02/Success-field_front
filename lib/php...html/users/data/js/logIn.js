import { location } from "./fctn.js";
document.getElementById("form").addEventListener("submit", (e) => {
  const form = new FormData(document.getElementById("form"));
  e.preventDefault();
  const login = new XMLHttpRequest();
  login.open("POST", "../data/php/log.php", true);
  login.onloadend = () => {
    if (login.readyState === 4 && login.status === 200) {
      let pass = JSON.parse(login.responseText);
      if (pass.statut === 0) {
        let db;
        const request = indexedDB.open("Success-field", 1);

        request.onupgradeneeded = function (event) {
          db = event.target.result;
          const objetStore = db.createObjectStore("mesDonnees", { keyPath: "id" });
        };
          request.onsuccess = function (event) {
          db = event.target.result;
          const transaction = db.transaction(["mesDonnees"], "readwrite");
         
          const objetStore = transaction.objectStore("mesDonnees");
          objetStore.add({id:1, UnId: pass.UnId, nom: pass.nom, tel: pass.tel, profil: pass.profil, statut: pass.status, email: pass.email });
          let req = location(window.location.href)
          switch (req) {
            case "monoshop":
              window.location.href = "../../../monoshop/"
              break;
            case "message":
              window.location.href = "../../../message/"
              break;
            case "reseaux":
              window.location.href = "../../../social/";
              break;
            case "Publication_social":
              window.location.href = "../../../social/data/pages/publish.php";
              break;
            default:
              window.location.href = "../";
              break;
          }
        };
        request.onerror = function (event) {
          alert("Une erreur est survenue lors de votre connexion. Veuillez réesayer! " + event)
          console.error("Erreur lors de l'ouverture de la base de données", event);
        };
      } else {
        alert(`${pass.msg}`);
      }
    } else {
      alert("Veuillez nous excusez. Recommencer🙆‍♂️");
    }
  };
  login.send(form);
});
