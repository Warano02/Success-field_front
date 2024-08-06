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
          case "iuiuibuicciuihibdshibdjcbdicu_çiosduçduççjsd":
            window.location.href = "../../../social/data/pages/messages.php";
            break;
          default:
            window.location.href = "../";
            break;
        }
      } else {
        alert(`${pass.msg}`);
      }
    } else {
      alert("Veuillez nous excusez. Recommencer🙆‍♂️");
    }
  };
  login.send(form);
});
