const Franc = (euro) => {
    return `${euro * 650}XAF`;
  };
  /**
   * Mise a jours des informations
   */
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../../../config/php/user.php?GetUser=h558jsjzi774sb", true);
  xhr.onloadend = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      let user = JSON.parse(xhr.responseText);
      document.querySelector(".nav_profile .photo img").src =
        "../../../../../api/app/data/admin-pp/" + user.profil;
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
  xhr.send();
  