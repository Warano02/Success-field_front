/**
 * Script de la partie index du dossier ../pages/setting
 */
const get = new XMLHttpRequest()
get.open("GET","../../config/php/user.php?jsshdjdjdj=225")
get.onloadend = () => sessionStorage.setItem("email", get.responseText)
get.send()
const xhr = new XMLHttpRequest();
xhr.open("POST", "http://localhost:3000/post/confirm/email/")
xhr.setRequestHeader("Content-type","application/json")
xhr.onloadend = () => {
    if (xhr.readyState == 4 && xhr.status == 201) {
        const reponse = JSON.parse(xhr.responseText)
        sessionStorage.setItem('code', reponse.code)
        window.location.href = "./confirm.php"
    } else {
        alert("Une erreur est survenue lors de l'envoie de votre message ! Veuillez actualiser...")
    }
}

let i = 0
let t = setInterval(() => {
    if (i == 5) {
        clearInterval(t)
        xhr.send(JSON.stringify({
            "API_KEY": "Warano0101101225@carineteoi@gmzil58ldl.hdk+",
            "object": "Confirm_mail",
            "email": sessionStorage.getItem("email")}))
    } else {
        i++
    }
}, 1000);