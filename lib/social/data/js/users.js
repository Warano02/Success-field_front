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
        const xhr = new XMLHttpRequest();
        xhr.open('GET', "../config/php/yo.php", true);
        xhr.onload = () => { localStorage.setItem("moi", xhr.responseText) };
        xhr.send();
        RESOLT.forEach((user) => {
            const use = `
         <div class="user ${user.profil} ${user.unique_id} ${user.nom}">
          <img src="../../../api/app/data/admin-pp/${user.profil}" alt="Profil de ${user.nom}" />
          <span class="s1">${user.nom.split(' ')[0]}</span>
          <span class="Symbole-Online"></span>
        </div>
    `
            document.getElementById("Online").insertAdjacentHTML('beforeend', use)
        });
        let users = document.querySelectorAll('.user')
        users.forEach(user => {
            user.addEventListener('click', () => {
                let i = user.classList.value.split(' ')
                sessionStorage.setItem("profil", i[1])
                sessionStorage.setItem("nom", i[3])
                window.location.href = `message.php?id=${i[2]}`

            })
        });
    } else {
        alert("Une erreur est survenue lors du chargement de la page. Veuillez actualiser !")
    }
}
XHR.send()