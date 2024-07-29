/**
 * Script pour la page ../pages/meco.php
 */


/**
 *
 * @param {string} word
 * @returns number
 */
function rest(word) {
  let i = word.indexOf("=") + 1,
    r = "";
  for (; i < word.length; i++) {
    r += word[i];
  }
  return r;
}
let Form = document.getElementById("form");
let input = document.getElementById("msg");
let Us = JSON.parse(localStorage.getItem("Users"));
let place = window.location.href;
let user;
let id = rest(place);

/**
 * Mise a jours du profil
 */
Us.forEach((element) => {
  if (element.unique_id == id) {
    user = element;
    sessionStorage.setItem("Encours", JSON.stringify(user));
    document.getElementById("nom").textContent = user.nom;
    document.getElementById("profil").src =
      "../../../api/app/data/admin-pp/" + user.profil;
  }
});
/**
 * Gesttion de l'envoie des messages
 */
Form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("discussion").insertAdjacentHTML(
    "beforeend",
    `<div class="msg outgoing">
                <div class="details">
                    <p>${input.value}</p>
                </div>
      </div>`
  );

  document.getElementById("discussion").scrollTop =
  document.getElementById("discussion").scrollHeight;
  const form = new FormData(Form);
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "../config/request/index.php", true);
  xhr.onloadend = () => {
    document.getElementById("msg").ariaValueText="";
    if ( xhr.readyState === 4 && xhr.status === 200 && xhr.responseText.error === 1) {
      alert("une erreur s'est produite lors de l'envoie");
    }
  };
  xhr.send(form);
});

/**
 * Chargements des messages a l'entrer sur la page
 */
const xhr = new XMLHttpRequest();
xhr.open(
  "GET",
  `../config/request/reel.php?user=${sessionStorage.getItem("Moi")}&&id=${id}`,
  true
);
xhr.onloadend = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const mes = JSON.parse(xhr.responseText);
    if (mes.length === 0) {
      document.getElementById("discussion").insertAdjacentHTML(
        "beforeend",
        ` <div class="msg incoming">
          <img src="../../../api/app/data/admin-pp/${
            JSON.parse(sessionStorage.getItem("Encours")).profil
          }" alt="profil">
           <div class="details">
              <p>Salut toi👋 Laisse ton messages et je te reponnd dans un instant 💻🫣</p>
            </div>
        </div>`
      );
    } else {
      sessionStorage.setItem("hmm", mes.length);
      mes.forEach((sms) => {
        if (sms.send == 1) {
          document.getElementById("discussion").insertAdjacentHTML(
            "beforeend",
            `<div class="msg outgoing">
                  <div class="details">
                      <p>${sms.msg}</p>
                  </div>
        </div>`
          );
        } else {
          document.getElementById("discussion").insertAdjacentHTML(
            "beforeend",
            `
        <div class="msg incoming">
          <img src="../../../api/app/data/admin-pp/${
            JSON.parse(sessionStorage.getItem("Encours")).profil
          }" alt="profil">
           <div class="details">
              <p>${sms.msg}</p>
            </div>
        </div>
        `
          );
        }
      });
    }
    document.getElementById("discussion").scrollTop =
      document.getElementById("discussion").scrollHeight;
  } else {
    alert(
      "Une erreur est survenue lors du chargement de la pages. Actualiser svp !"
    );
  }
};
xhr.send();

/**
 * Mise a jours en temps réel
 */

setInterval(() => {
  const messages = new XMLHttpRequest();
  messages.open(
    "GET",
    `../config/request/reel.php?user=${sessionStorage.getItem(
      "Moi"
    )}&&id=${id}`,
    true
  );
  messages.onloadend = () => {
    if (messages.status === 200 && messages.readyState === 4) {
      const message = JSON.parse(messages.responseText);
      if (
        message.length > sessionStorage.getItem("hmm") &&
        message[message.length - 1].send === 0
      ) {
        sessionStorage.setItem("hmm", message.length);
        document.getElementById("discussion").insertAdjacentHTML(
          "beforeend",
          `
        <div class="msg incoming">
          <img src="../../../api/app/data/admin-pp/${
            JSON.parse(sessionStorage.getItem("Encours")).profil
          }" alt="profil">
           <div class="details">
              <p>${message[message.length - 1].msg}</p>
            </div>
        </div>
        `
        );
        document.getElementById("discussion").scrollTop =
          document.getElementById("discussion").scrollHeight;
      }
    }
  };
  messages.send();
}, 1000);
document.getElementById('logout').addEventListener('target',()=>localStorage.clear())