let term = document.getElementById("searchUser");
let OK = JSON.parse(localStorage.getItem("Users"));

term.oninput = () => {
  let r = term.value;
  let user = OK.filter((ru) => ru.nom === r);
  console.log(user);
  if (user != undefined) {
    if (user.length != []) {
      console.log(user);
      document.getElementById("users-list").innerHTML = `
     <a href="./meco.php?user=${user[0].unique_id}">
        <div class="contents">
            <img src="../../../api/app/data/admin-pp/${
              user[0].profil
            }" alt="profil">
            <div class="details">
               <span>${user[0].nom}</span>
               <p>Causer avec ${user[0].nom.split(" ")[0]} </p>
             </div>
        </div>
        <div class="statut ${user[0].statut}"><i class="bx bxs-circle"></i></div>
    </a>
    `;
    } else {
      document.getElementById("users-list").innerHTML = `
     <a href="#">
        <div class="contents">
            <img src="../../../api/app/data/donee/5.png" alt="profil">
            <div class="details">
               <span>Warano Api</span>
               <p>Aucun utilisatur trouver avec le nom ${r}  Verifier votre orthographe</p>
             </div>
        </div>
        <div class="statut offline"><i class="bx bxs-circle"></i></div>
    </a>
    `;
    }
  }
};
