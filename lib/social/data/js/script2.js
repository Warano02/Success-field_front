/**
 * Updatting a hours 
 */
function mettreAJourHeure() {
  const date = new Date();
  const heures = date.getHours();
  const minutes = date.getMinutes();
  const heureActuelle = `${heures.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}`;

  document.getElementById("heure").textContent = heureActuelle;
}
setInterval(mettreAJourHeure, 1000);
document.getElementById('View_profil').addEventListener('click',()=>window.location.href="./publish.php")
document.querySelector('.fa-shop').addEventListener('click',()=>window.location.href="../../../monoshop/data/")
const OK = new XMLHttpRequest();
OK.open('GET', '../config/php/yo.php', true)
OK.onloadend = () => {
  let serveur = JSON.parse(OK.response)

  let href = window.location.href
  /**
   * 
   * @param {string} hre : A location reference of where we are
   * @returns false | number : false if isn't query and number when is query
   */
  function query(hre) {
    let mot = ""
    let i = hre.indexOf("?") + 1
    if (i == 0) {
      return false
    } else {
      for (let j = i; j < i + 5; j++) {
        mot += hre[j]
      }
      if (mot == "query") {
        i -= 5
        i = hre.indexOf('=') + 1
        for (; i < href.length; i++) {
          href[i] ? mot += href[i] : ""
        }
        return mot.match(/\d/g).join("")
      } else {
        return false
      }

    }
  }

  if (!query(href)) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/get/publications/', true)
    xhr.onloadend = () => {
      pub = JSON.parse(xhr.responseText)
      /**
       * Recuperation des publication
       */
      pub.forEach(publication => {
        let auth = (publication[1])
        let data = (publication[2])
        let stat = (publication[3])
        let comments = (publication[4])
        let commentaires = ""
        if (comments.length > 0) {
          comments.forEach(comment => {
            commentaires += `
        <div class="comment">
          <img src="../../../api/app/data/admin-pp/${comment.profil}" alt="Joyce img6" style="border: none;" />
          <div class="single-container">
            <span class="user"> ${comment.nom}</span>
            <span class="text">
                  ${comment.mess}
            </span>
          </div>
          <div class="buttons">
            <span class="time t2 m">${comment.heure}</span> <span class="dot">·</span>
            <span class="action liked">J'aime</span> ·
            <span class="action je">Repondre</span>
          </div>
        </div>
        `
          });
        }
        let reponse = `
      <div class="publication">
        <div class="profil">
          <img src="../../../api/app/data/admin-pp/${auth.profil}" alt="profil de l'utilisateur qui publie" />
          <span class="nomu">${auth.nom}</span>
          <span class="hg"><a href="#"><i class="fa-solid fa-ellipsis"></i></a><a href="#"> X</a></span>
          <span class="sp">Sponsorisée · <i class="fa-solid fa-earth-africa"></i></span>
          <span class="el"></span><span id="h">${data.heure}</span>
        </div>
        <div class="message">
          <p>
           ${data.mess}
          </p>
        </div>
        <div class="image">
          <img src="../img/publication/img/${data.nom}" alt="photo qui est publier" />
        </div>
        <div class="counter">
          <div class="reactions">
            <img class="like" src="../img/utils/like.jpg" />
            <img class="love" src="../img/utils/love.jpg" />
            <img class="care" src="../img/utils/surpris.jpg" />
            <span class="Likes_counter" id="id${publication[0]}">${stat.nbr_like}</span>
          </div>
          <span id="com${publication[0]}">${stat.nbr_com + " Commentaire" + (stat.nbr_com > 1 ? "s" : "")}</span>
          <span class="dot">·</span>
          <span>${stat.nbr_par + " Partage" + (stat.nbr_par > 1 ? "s" : "")}</span>
        </div>
        <div class="bar">
          <span class="react"><a class="liked"><img src="../img/utils/thumbs-up.svg" class="AdeaDjouni id${publication[0]} ${publication[0]}"></a></span>
          <span class="react"></i>
            <span class="Comments c${publication[0]} lailo${publication[0]}"><img src="../img/utils/cV.svg" id="lailo${publication[0]}"></span>
          </span>
          <span class="react share js${publication[0]} ${publication[0]}"> <img src="../img/utils/share-square.svg" id="js${publication[0]}" alt="image for share a publications"></span>
        </div>
        <div class="comments">
          <div class="comment">
            <img src="../../../api/app/data/admin-pp/${(comments.length > 0) ? comments[0].profil : "admin.png"}" alt="Joyce img6" style="border: none;" />
            <div class="single-container">
              <span class="user">${(comments.length > 0) ? comments[0].nom : "Admin Warano"}</span>
              <span class="text">
              ${comments.length > 0? comments[0].mess : "Aucun commentaire pour cette publication pour le moment"}
              </span>
            </div>
            <div class="buttons">
              <span class="time t2 m">${comments.length>0?comments[0].heure:publication[0]+"m"}</span> <span class="dot">·</span>
              <span class="action liked">J'aime</span> ·
              <span class="action je">Repondre</span>
            </div>
          </div>
          <div id="c${publication[0]}" class="annou">
             ${commentaires}
            </div>
          </div>
        </div>
        <form class="c${publication[0]} mess${publication[0]} com${publication[0]} ${publication[0]} forms">
          <input placeholder="Ecrivez un commentaire..." name="mess" type="text" minlength="1" id="mess${publication[0]}" required />
          <button type="submit" id="btnj">
            <i class='bx bx-send' style="font-size:20px;"></i>
          </button>
        </form>
      </div>
      `
        document.getElementById("ihd").insertAdjacentHTML('beforeend', reponse)

      });
      /**
       * Recupations of element of the DOM
       */
      let thumble_likes = document.querySelectorAll('.AdeaDjouni')
      let show_comments = document.querySelectorAll(".Comments")
      let annous = document.querySelectorAll('.annou')
      let shares = document.querySelectorAll('.share')
      let forms = document.querySelectorAll('.forms')


      /********************************************************
       * Updatting a likes and order when a user click to this
       *********************************************************/

      //for the likes
      thumble_likes.forEach(thumble_like => {
        thumble_like.addEventListener("click", () => {
          if (thumble_like.src != "../img/utils/like.jpg") {
            thumble_like.src = "../img/utils/like.jpg"
            let i = thumble_like.classList.value.split(' ')[1]
            let element = document.getElementById(i)
            element.textContent = parseInt(element.textContent) + 1
            i = thumble_like.classList.value.split(' ')[2]
            const xhr = new XMLHttpRequest();
            xhr.open("PATCH", `http://localhost:3000/patch/likes_update/${i}`)
            xhr.onloadend = () => xhr.responseText.error ? alert("Publication non liké. Veullez reesayer.") : ""
            xhr.send()

          }
        })
      });

      //for comments

      show_comments.forEach(comment => {
        comment.addEventListener('click', () => {
          let i = comment.classList.value.split(' ')[1];
          document.getElementById(i).style.display = "block";
          i = comment.classList.value.split(' ')[2];
          document.getElementById(i).src = "../img/utils/comment.svg";
          i = ""
        })
      });

      // share a publication
      shares.forEach(share => {
        share.addEventListener('click', () => {
          let i = share.classList.value.split(' ')[2]
          document.getElementById(i).src = "../img/utils/copy.svg";
          i = share.classList.value.split(' ')[3]
          let link = href + `?query=${i}`
          const xhr=new XMLHttpRequest()
          xhr.open("PATCH",`http://localhost:3000/patch/share_update/${i}`,true)
          xhr.send()
          let question = confirm(`Hey ${serveur.nom} souhaite tu partager cette publication avec vos amie  sur Whatsapp?`)
          if (question) {
            let message = `Cc toi👋. Je t'invite a regarder cette publication dans le reseaux de Success-field🫣🫣 Il te suffit de suivre le lien suivant ${link}`
          window.location.href=`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`
          } else {
            try {
              navigator.clipboard.writeText(`Cc.. Regarde la publication ci dans Success-field 😹😹 ${link}`)
            } catch (error) {
              alert("Veuillez nous autorisez a acceder a votre appareil svp 😥")
            }
          }
          const not = new Notification("", {
            body: "Lien de la publication copier dans votre presse papier",
            icon: "../img/utils/copy.svg"
          });
          i = 0
          let t = setInterval(() => {
            if (i == 3) {
              clearInterval(t);
              i = share.classList.value.split(' ')[2];
              document.getElementById(i).src = "../img/utils/share-square.svg";
            } else {
              i++
            }
          }, 1000);
        })
      });

      //Submition of message

      forms.forEach(form => {
        form.addEventListener("submit", (e) => {
          let jours = new Date()
          let detail = `${jours.getMonth()}-${jours.getDay()}-${jours.getHours()}-${jours.getMinutes()}`
          e.preventDefault();
          let message = document.getElementById(form.classList.value.split(' ')[1])
          let mes = `
      <div class="comment">
        <img src="../img/utils/cV.svg" />
        <div class="single-container">
          <span class="user"> Vous:</span>
          <span class="text"> ${message.value} </span>
          <img class="love" src="../img/utils/cV.svg" />
        </div>
        <div class="buttons">
          <span class="time t3 m"></span>A l'instant<span class="dot">·</span>
          <span class="action liked">J'aime</span> ·
          <span class="action je">Repondre</span>
        </div>
      </div>
      `
          let i = form.classList.value.split(' ')[0]
          document.getElementById(i).insertAdjacentHTML('beforeend', mes)

          i = form.classList.value.split(' ')[2]
          document.getElementById(i).textContent = (parseInt(document.getElementById(i).textContent) + 1) + ` commentaire${parseInt(document.getElementById(i).textContent) > 1 ? 's' : ''}`;
          let formulaire = ({
            "id": parseInt(form.classList.value.split(' ')[3]),
            "comment": {
              "nom": serveur.nom,
              "mess": message.value,
              "profil": serveur.profil,
              "heure": detail
            }
          })
          console.log(formulaire);
          const publish_comment = new XMLHttpRequest();
          publish_comment.open('PUT', 'http://localhost:3000/put/add_new_comment', true)
          publish_comment.setRequestHeader("Content-Type","application/json")
          publish_comment.onloadend = () => (JSON.parse(publish_comment.responseText)).error ? alert("Une erreur est survenue lors de l'ajout du commentaire . Veuillez reesayer") : ""
          publish_comment.send(JSON.stringify(formulaire))
          message.value = ""
        })
      });
    }
    xhr.send()
  } else {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', ` http://localhost:3000/get/publications/?id=${query(href)}`, true)
    xhr.onloadend = () => {
      if (xhr.status == 200 && xhr.readyState == 4 || xhr.status == 503 && xhr.readyState == 4) {
        const publication = JSON.parse(xhr.responseText)
        if (publication.error) {
          alert("Vous tenter acceder a une publication qui n'existe pas. Veuillez retourner en lieu sûr !")
          window.location.href = '../../'
        } else {
          let auth = (publication[0].auth)
          let data = (publication[0].pub)
          let stat = (publication[0].stat)
          let comments = (publication[0].comments)
          let commentaires = ""
          if (comments.length > 0) {
            comments.forEach(comment => {
              commentaires += `
          <div class="comment">
            <img src="../../../api/app/data/admin-pp/${comment.profil}" alt="Joyce img6" style="border: none;" />
            <div class="single-container">
              <span class="user"> ${comment.nom}</span>
              <span class="text">
                    ${comment.mess}
              </span>
            </div>
            <div class="buttons">
              <span class="time t2 m">${comment.heure}</span> <span class="dot">·</span>
              <span class="action liked">J'aime</span> ·
              <span class="action je">Repondre</span>
            </div>
          </div>
          `
            });
          }
          let reponse = `
        <div class="publication">
          <div class="profil">
            <img src="../../../api/app/data/admin-pp/${auth.profil}" alt="profil de l'utilisateur qui publie" />
            <span class="nomu">${auth.nom}</span>
            <span class="hg"><a href="#"><i class="fa-solid fa-ellipsis"></i></a><a href="#"> X</a></span>
            <span class="sp">Sponsorisée · <i class="fa-solid fa-earth-africa"></i></span>
            <span class="el"></span><span id="h">${data.heure}</span>
          </div>
          <div class="message">
            <p>
             ${data.mess}
            </p>
          </div>
          <div class="image">
            <img src="../img/publication/img/${data.nom}" alt="photo qui est publier" />
          </div>
          <div class="counter">
            <div class="reactions">
              <img class="like" src="../img/utils/like.jpg" />
              <img class="love" src="../img/utils/love.jpg" />
              <img class="care" src="../img/utils/surpris.jpg" />
              <span class="Likes_counter" id="id${publication[0].id}">${stat.nbr_like}</span>
            </div>
            <span id="com${publication[0].id}">${stat.nbr_com + " Commentaire" + (stat.nbr_com > 1 ? "s" : "")}</span>
            <span class="dot">·</span>
            <span>${stat.nbr_par + " Partage" + (stat.nbr_par > 1 ? "s" : "")}</span>
          </div>
          <div class="bar">
            <span class="react"><a class="liked"><img src="../img/utils/thumbs-up.svg" class="AdeaDjouni id${publication[0].id}"></a></span>
            <span class="react"></i>
              <span class="Comments c${publication[0].id} lailo${publication[0].id}"><img src="../img/utils/cV.svg" id="lailo${publication[0].id}"></span>
            </span>
            <span class="react"> <img src="../img/utils/share-square.svg" alt="image for share a publications"></span>
          </div>
          <div class="comments">
            <div class="comment">
            <img src="../../../api/app/data/admin-pp/${(comments.length > 0) ? comments[0].profil : "admin.png"}" alt="Joyce img6" style="border: none;" />
            <div class="single-container">
              <span class="user">${(comments.length > 0) ? comments[0].nom : "Admin Warano"}</span>
              <span class="text">
              ${comments.length > 0? comments[0].mess : "Aucun commentaire pour cette publication pour le moment"}
              </span>
            </div>
            <div class="buttons">
              <span class="time t2 m">19m</span> <span class="dot">·</span>
              <span class="action liked">J'aime</span> ·
              <span class="action je">Repondre</span>
            </div>
            <div id="c${publication[0].id}" class="annou">
               ${commentaires}
              </div>
            </div>
          </div>
          <form class="c${publication[0].id} mess${publication[0].id} com${publication[0].id} ${publication[0].id} forms">
            <input placeholder="Ecrivez un commentaire..." name="mess" type="text" minlength="1" id="mess${publication[0].id}" required />
            <button type="submit" id="btnj">
              <img src="../img/utils/surpris.jpg" alt="Image for submit a message">
            </button>
          </form>
        </div>
        `
          document.getElementById("ihd").insertAdjacentHTML('beforeend', reponse)
          let thumble_likes = document.querySelectorAll('.AdeaDjouni')
          let show_comments = document.querySelectorAll(".Comments")
          let annous = document.querySelectorAll('.annou')
          let forms = document.querySelectorAll('.forms')
          thumble_likes.forEach(thumble_like => {
            thumble_like.addEventListener("click", () => {
              thumble_like.src = "../img/utils/like.jpg"
              let i = thumble_like.classList.value.split(' ')[1]
              let element = document.getElementById(i)
              element.textContent = parseInt(element.textContent) + 1
            })
          });

          //for comments

          show_comments.forEach(comment => {
            comment.addEventListener('click', () => {
              let i = comment.classList.value.split(' ')[1];
              document.getElementById(i).style.display = "block";
              i = comment.classList.value.split(' ')[2];
              document.getElementById(i).src = "../img/utils/comment.svg";
              i = ""
            })
          });

          //Submition of message

          forms.forEach(form => {
            form.addEventListener("submit", (e) => {
              let jours = new Date()
              let detail = `${jours.getMonth()}-${jours.getDay()}-${jours.getHours()}-${jours.getMinutes()}`
              e.preventDefault();
              let message = document.getElementById(form.classList.value.split(' ')[1])
              let mes = `
          <div class="comment">
            <img src="../img/utils/cV.svg" />
            <div class="single-container">
              <span class="user"> Vous:</span>
              <span class="text"> ${message.value} </span>
              <img class="love" src="../img/utils/cV.svg" />
            </div>
            <div class="buttons">
              <span class="time t3 m"></span>A l'instant<span class="dot">·</span>
              <span class="action liked">J'aime</span> ·
              <span class="action je">Repondre</span>
            </div>
          </div>
          `
              let i = form.classList.value.split(' ')[0]
              document.getElementById(i).insertAdjacentHTML('beforeend', mes)

              i = form.classList.value.split(' ')[2]
              document.getElementById(i).textContent = (parseInt(document.getElementById(i).textContent) + 1) + ` commentaire${parseInt(document.getElementById(i).textContent) > 1 ? 's' : ''}`;
              let formulaire = ({
                "id": parseInt(form.classList.value.split(' ')[3]),
                "comment": {
                  "nom": serveur.nom,
                  "mess": message.value,
                  "profil": serveur.profil,
                  "heure": detail
                }
              })
              const publish_comment = new XMLHttpRequest();
              publish_comment.open('PUT', 'http://localhost:3000/put/add_new_comment', true)
              publish_comment.setRequestHeader("Content-Type","application/json")
              publish_comment.onloadend = () => (JSON.parse(publish_comment.responseText)).error ? alert("Une erreur est survenue lors de l'ajout du commentaire . Veuillez reesayer") : ""
              publish_comment.send(JSON.stringify(formulaire))
              message.value = ""
            })
          });
        }

      } else {
        alert("Erreur lors du chargement de la page. Veuillez actualiser  ")

      }
    }
    xhr.send()
  }

}
OK.send()

