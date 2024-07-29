/**
 * Script pour la page ../pages/admin/produit/index.php
 */
let montant = document.getElementById('montant')
let amount = document.getElementById('amount')
let form = document.getElementById('Form')
document.getElementById('nom').oninput = () => document.getElementById('Pnom').textContent = document.getElementById('nom').value
document.getElementById('description').oninput = () => document.getElementById('desc').textContent = document.getElementById('description').value
document.getElementById('src').oninput = () => document.getElementById("image").src = document.getElementById('src').value
amount.oninput = () => montant.textContent = amount.value >= 650 ? `${(amount.value / 650).toFixed(2)}€` : '5€'


form.addEventListener('submit', (e) => {
    e.preventDefault();
    let Data = new FormData(form)
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "../../../config/php/produit.php", true)
    // xhr.setRequestHeader("Content-type","application/json")
    xhr.onloadend = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let result = JSON.parse(xhr.responseText)
            alert(result.msg)
            !result.error ? window.location.href = "../" : window.location.href = "#"
        } else {
            alert("Une erreur s'est produite lors de l'ajout de votre produit. Veuillez réesayer.")
        }
    }
    xhr.send(Data)

})