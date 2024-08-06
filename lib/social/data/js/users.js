/**
 * Sript de la page ../pages/Messages.php
 */
function mettreAJourHeure() {
    const date = new Date();
    const heures = date.getHours();
    const minutes = date.getMinutes();
    const heureActuelle = `${heures.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;

    document.getElementById("heure").textContent = heureActuelle;
}
setInterval(mettreAJourHeure, 1000);
const XHR = new XMLHttpRequest();
XHR.open('GET', "../config/php/config.php?users=all")
XHR.onloadend = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
        const RESOLT = JSON.parse(XHR.responseText)
        const xhr=new XMLHttpRequest()
        xhr.open('GET', "../config/php/yo.php",true)
        xhr.onloadend=()=>localStorage.setItem("moi",xhr.responseText)
        xhr.send()
        async function noName() {
            await RESOLT.forEach((user) => {
                const use = `
    <div class="user">
          <img src="../../../api/app/data/admin-pp/${user.profil}" alt="Profil de ${user.nom}" />
          <span class="s1">${user.nom.split(' ')[0]}</span>
          <span class="Symbole-Online"></span>
        </div>
    `
            document.getElementById("Online").insertAdjacentHTML('beforeend', use)
            });
        }
        noName()
        let users = document.querySelectorAll('user')

        users.forEach(user => {
            user.addEventListener('click', () => {
                localStorage.setItem("nom", user.nom)
                localStorage.setItem("profil", user.profil)
                localStorage.setItem("Id", user.UnId)
                window.location.href = `message.php?id=${user.UnId}`

            })
        });
    } else {
        alert("Une erreur est survenue lors du chargement de la page. Veuillez actualiser !")
    }
}
XHR.send()