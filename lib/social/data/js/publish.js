/**
 * SCRIPT DE LA PAGE ../pages/publish.php
 */
document.querySelector('.bx-arrow-back').addEventListener('click', () => window.location.href = "./")
let cdp = document.getElementById("Change_profil")
cdp.addEventListener('click', () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "../config/php/decon.php?deconn=true", true)
    xhr.onloadend = () => (xhr.status == 200 && xhr.readyState == 4) ? window.location.href = "../../../php...html/users/login?href=Publication_social" : alert('Une erreur est survenue. Veuillez réesayer')
    xhr.send()
})


const xhr = new XMLHttpRequest()
xhr.open("GET", "../config/php/yo.php", true)
xhr.onloadend = () => {
    const responseTex = JSON.parse(xhr.responseText)
    
    const profil = responseTex.profil
    const xh = new XMLHttpRequest();
    xh.open('GET', `http://localhost:3000/get/publications/user?profil=${profil}`, true)
    xh.onloadend = () => (xh.status == 200) ? document.getElementById('ndp').textContent = (JSON.parse(xh.responseText)).length : document.getElementById('ndp').textContent = 0 
    xh.send()
}
xhr.send()
