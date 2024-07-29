/**
 * script of `./data/pages/setting/confirm.php`
 */
let Input = document.querySelectorAll("input");
let i = 0,
  o = "";
let code=sessionStorage.getItem("code")
const t = setInterval(() => {
  if (i == 5) {
    clearInterval(t);
    i = 0;
    alert("Un instant nous verifions  ");
    if (o==code) {
      const confiration = new XMLHttpRequest();
      confiration.open("GET","../../config/php/user.php?cofirmEmail=ForWarano");
      confiration.onloadend=()=>{
        if (confiration.status==200) {
          const res=JSON.parse(confiration.responseText)
          if (!res.error) {
            window.location.href="../../"
          }
        } else {
          alert("Une erreur inattendue. Veuillez reesayer ")
        }
      }
      confiration.send()
    } else {
      alert("Le code que vous avez entree ne correspond pas a celui envoyé !")
    }

  } else {
    let imput = Input[i];
    if (imput.value.length == 1 && !isNaN(imput.value)) {
      i++;
      o += imput.value;
      imput.classList.remove("active");
      imput.setAttribute("disabled", true);
      const next = Input[i];
      next.classList.add("active");
      next.removeAttribute("disabled");
    } else {
      imput.value = "";
    }
  }
}, 100);
