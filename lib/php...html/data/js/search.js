let find = document.getElementById("find");
let Term = document.getElementById("search");
find.addEventListener("submit", (e) => {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `./data/php/index.php?yo=jbjbjzbjkerjkerjeo&&nom=${encodeURIComponent(
      Term.value
    )}`
  );
  xhr.onloadend = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let res = JSON.parse(xhr.responseText);
      document.getElementById("total").textContent = res.length;
      document.getElementById("term").textContent =
        Term.value.length > 11
          ? Term.value.substring(0, 10) + "..."
          : Term.value;
      if (res.length > 0) {
        let sujet = res;
        res.forEach((sujet) => {
          let j = sujet.Annee.split("/")[0];
          let m = sujet.Annee.split("/")[1];
          let A = sujet.Annee.split("/")[2];

          const data = `<div class="epreuve">
          <div class="date">
              <span class="jolie"></span>
              <span class="mois">${mois[m - 1]}</span>
              <span class="jour">${j}</span>
              <span class="annee">${A}</span>
          </div>
          <div class="desc">
              <h1> <span class="classe">${
                sujet.niveau
              }</span><span>-</span> <span class="matiere">${
            sujet.Matiere
          } </span></h1>
  
              <p class="description">${sujet.descrip} </p>
          </div>
          <span class="par"><small>By ${
            sujet.prof
          } </small> <sub>Universiter de ${sujet.ville} </sub></span>
          <div class="download"><img src="./data/img/download.png" data-src=${
            sujet.epreuve
          }"  data-nom="${sujet.Matiere}" data-prof="${
            sujet.prof
          }" data-desc="${sujet.descrip}" data-level="${
            sujet.niveau
          }" class="dwn" id="download">
          </div>
          <div class="separation"></div>
          <div class="btn-list">
              <span class="like"> 51 </span> <img src="./data/img/thumb_up.png" class="likeb" alt="J'aime image">
          </div>
      </div>`;
          document
            .getElementById("resultat")
            .insertAdjacentHTML("beforeend", data);
        });
      }
    } else {
      alert(
        "Une erreur est survenue lors de votre recherche. Veuillez réesayer"
      );
    }
  };
  xhr.send();
});
