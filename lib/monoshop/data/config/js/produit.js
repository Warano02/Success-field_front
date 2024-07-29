let Article = document.getElementById('produit-brute')

const xhr = new XMLHttpRequest();
xhr.open('GET', './config/php/produit.php?produit=All.min', true)
xhr.onloadend = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const produits = JSON.parse(xhr.responseText)

        produits.forEach(produit => {
            let desc = produit.description.length > 597 ? produit.description.substring(0, 596) + "..." : produit.description
            let ajout = `
  <div class="card shadow-sm">
    <title> ${produit.nom} </title>
    <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
            <span class="navbar-text">${produit.nom}</span>
         </div>
    </nav>
    <img src="${produit.image}">
    <div class="card-body">
       <p class="card-text">${desc}</p>
        <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary acheter" data-prix="${produit.prix}" data-nom="${produit.nom}" data-src=" ${produit.image}" data-par="${produit[5]}" data-desc="${desc}"  id="acheter">Acheter</button>
             </div>
            <small class="text-body-secondary" id="${produit.id}">${produit.prix} €</small>
        </div>
     </div>
   </div>`
            Article.insertAdjacentHTML('beforebegin', ajout)

        });
        const xhr0 = new XMLHttpRequest();
        xhr0.open("GET", "./config/php/user.php?GetUser=h558jsjzi774sb", true);
        xhr0.onloadend = () => {
            if (xhr0.status === 200) {
                let rs = JSON.parse(xhr0.responseText)
            } else {

            }
        }

        xhr0.send();

    } else {
        alert('Une erreur s\'est produite lors du chargement de la page... Actualiser')
    }
}
xhr.send();