const mois = [
  "janvier",
  "fevrier",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Decembre",
];
const jdklistswara0002544825hsh = new XMLHttpRequest();
jdklistswara0002544825hsh.open("GET", "./data/php/fetch.php", true);
jdklistswara0002544825hsh.onloadend = () => {
  if (
    jdklistswara0002544825hsh.readyState === 4 &&
    jdklistswara0002544825hsh.status === 200
  ) {
    
    let subject = JSON.parse(jdklistswara0002544825hsh.responseText);

    subject.forEach((sujet) => {
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
        }"  data-nom="${sujet.Matiere}" data-prof="${sujet.prof}" data-desc="${
        sujet.descrip
      }" data-level="${sujet.niveau}" class="dwn" id="download">
        </div>
        <div class="separation"></div>
        <div class="btn-list">
            <span class="like"> 51 </span> <img src="./data/img/thumb_up.png" class="likeb" alt="J'aime image">
        </div>
    </div>`;
      document
        .getElementsByClassName("subject")[0]
        .insertAdjacentHTML("beforeend", data);
    });
    let like = document.querySelectorAll(".like");
    let likeb = document.querySelectorAll(".likeb");
    const dlbtn = document.querySelectorAll('.dwn');
    dlbtn.forEach(element => {
        element.addEventListener('click', () => {
            localStorage.setItem("doawnload", JSON.stringify({
                source: element.getAttribute('data-src'),
                matiere: element.getAttribute('data-nom'),
                par: element.getAttribute('data-prof'),
                niveau: element.getAttribute('data-level'),
                desc: element.getAttribute('data-desc')
            }));
            window.location.href = './data/download.php';
        })
    });

    setInterval(() => {
        like.forEach(element => {
            const ll = parseInt(element.textContent);
            element.textContent = ll + 1;

        });
    }, (12800));

    likeb.forEach(btn => {
        btn.addEventListener("click", () => {
            let index = Array.prototype.indexOf.call(likeb, btn);
            likeb[index].src = './data/img/thumb_up_filled.png';
            like[index].textContent = parseInt(like[index].textContent) + 1;
            unlikeb[index].disable = true;
        })
    })
  } else {
    alert(
      "Une erreur est survenue lors du chargement de la page. Veullez actualiser !"
    );
  }
};
jdklistswara0002544825hsh.send();
