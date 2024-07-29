let searchBar = document.querySelector(".users .search input");
let searchBtn = document.querySelector(".users .search button");
let icon = searchBtn.querySelector("i");
const Tayc = new XMLHttpRequest();
Tayc.open("GET", "../config/index.php", true);
Tayc.setRequestHeader("Content-Type", "application/json");
Tayc.onloadend = () => {
  if (Tayc.readyState === 4 && Tayc.status === 200) {
    sessionStorage.setItem("Moi", Tayc.responseText);
  } else {
    console.error("chemin vers id incorect");
  }
};
Tayc.send();
searchBtn.onclick = () => {
  searchBar.classList.toggle("active");
  searchBar.focus();
  searchBtn.classList.toggle("active");

  if (icon.className == "bx bx-search-alt") {
    icon.classList = "bx bx-x";
  } else {
    icon.classList = "bx bx-search-alt";
  }
  searchBar.value = "";
};

const users = new XMLHttpRequest();
users.open("GET", "../config/getU.php", true);
users.setRequestHeader("Content-Type", "application/json");
users.onloadend = () => {
  const Users = JSON.parse(users.response);
  let oo=[]
  Users.forEach((user) => {
    oo.push(user[0])
    document.getElementById("users-list").insertAdjacentHTML(
      "beforeend",
      `  <a href="./meco.php?user=${user[0].unique_id}">
                    <div class="contents">
                        <img src="../../../api/app/data/admin-pp/${
                          user[0].profil
                        }" alt="profil">
                        <div class="details">
                            <span>${user[0].nom}</span>
                            <p> ${user.msg} </p>
                        </div>
                    </div>
                    <div class="statut ${
                      user[0].statut
                    }"><i class="bx bxs-circle"></i></div>
               </a>`
    );
  });
  localStorage.setItem("Users", JSON.stringify(oo));
};

users.send();
