const Franc = (euro) => {
  return `${euro * 650}XAF`;
};
/**
 * Mise a jours des informations
 */
const xhr = new XMLHttpRequest();
xhr.open("GET", "../../config/php/user.php?GetUser=h558jsjzi774sb", true);
xhr.onloadend = () => {
  if (xhr.status === 200 && xhr.readyState === 4) {
    let user = JSON.parse(xhr.responseText);
    document.querySelector(".nav_profile .photo img").src =
      "../../../../api/app/data/admin-pp/" + user.profil;
    document
      .querySelector(".solde h5")
      .insertAdjacentText(
        "beforeend",
        `Vous avez ${Franc(user.solde)} en compte`
      );
  } else {
    alert("Une erreur est survenue lors du chargement de la page !");
    window.location.href = "../";
  }
};

/**
 * Mises à jours ddes produits
 */
const db = new XMLHttpRequest();
db.open("GET", "../../config/php/produit.php?propriete=Pour_warano", true);
db.onloadend = () => {
  if (db.readyState === 4 && db.status === 200) {
    let r = JSON.parse(db.responseText);
    r.forEach((pdt) => {
      let des =
        pdt.description.length > 100
          ? pdt.description.substring(0, 100) + " etc..."
          : pdt.description;
      document.querySelector("main table tbody").insertAdjacentHTML(
        "beforeend",
        ` <tr>
        <td>${pdt.nom.length > 50 ? pdt.nom.split("")[0] : pdt.nom} </td>
                            <td>${des} </td>
                            <td>${Franc(pdt.prix)}</td>
                            <td><a href="./produit/edit.php?id=${
                              pdt.id
                            }" class="btn sm">Modifier</a></td>
                            <td><a href="./produit/delete.php?id=${
                              pdt.id
                            }" class="btn sm danger">Supprimer</a></td>
        </tr>`
      );
    });
  } else {
    alert("une erreur est survenue.Actualisez la page");
  }
};

db.send();
xhr.send();
