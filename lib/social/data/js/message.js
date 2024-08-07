/**
 * Script de la page ../pages/message.php
 */
import { textMessage, fetchUrl, postUrl, userId, defaultMessaege, audioMessage,ToggleMic,SetupAudio } from "./react.js";

SetupAudio()
let Form = document.getElementById('form')
Form.style.display="none"
let nom = document.getElementById('nom')
let profil = document.getElementById('profil')
const main = document.getElementById("main")
let Vocal = document.getElementById("start")
document.getElementById('re').addEventListener('click', () => window.location.href = './messages.php')
nom.textContent = sessionStorage.getItem("nom")
profil.src = "../../../api/app/data/admin-pp/" + sessionStorage.getItem('profil')
let moi = JSON.parse(localStorage.getItem("moi"))
let MonProfil = moi.profil
let ID = moi.UnId
let SonProfil = sessionStorage.profil
let WindoUrl = window.location.href
let id = userId(WindoUrl)

fetchUrl(`http://localhost:3000/get/messages/${ID}/${id}`)
    .then((Messages_Lots) => {
        if (Messages_Lots.length != 0 && !Messages_Lots.error) {
            sessionStorage.setItem('i', Messages_Lots.length)
            Messages_Lots.forEach(Messages_Brute => {
                let value = Messages_Brute.valeur
                let type = Messages_Brute.type
                let Am_author = Messages_Brute.moi
                let messageId = Messages_Brute.id
                if (!Am_author) {
                    switch (type) {
                        case "audio":
                            audioMessage("Interlocutor", SonProfil, messageId, value)
                                .then((Message => main.insertAdjacentHTML('beforeend', Message)))
                                .catch(err => { return err })
                            break;
                        default:
                            let Message = textMessage("Interlocutor", SonProfil, value)
                            main.insertAdjacentHTML('beforeend', Message)
                            break;
                    }
                } else {
                    switch (type) {
                        case "audio":
                            audioMessage("me", SonProfil, messageId, value)
                                .then((Message => main.insertAdjacentHTML('beforeend', Message)))
                                .catch(err => { return err })
                            break;
                        default:
                            let Message = textMessage("Interlocutor", SonProfil, value)
                            main.insertAdjacentHTML('beforeend', Message)
                            break;
                    }
                }
            });
        } else {
            main.insertAdjacentHTML("beforeend", defaultMessaege(SonProfil))
        }
        return true
    })
    .then(OK => {
        Form.style.display="block"
        let plays = document.querySelectorAll(".play")
        let pauses = document.querySelectorAll(".pause")
        plays.forEach(play => {
            play.addEventListener("click", () => {
                let i = play.classList.value.split(' ')[1]
                document.getElementById(i + play.classList.value.split(' ')[2]).style.display = "block"
                let audio = document.getElementById(i)
                audio.play();
                i += i
                let progressBar = document.getElementById(i)
                audio.addEventListener('timeupdate', () => {
                    var progressPercent = (audio.currentTime / audio.duration) * 100;
                    if (progressPercent == 1) {
                        audio.currentTime = 0
                    }
                    progressBar.style.left = progressPercent + '%';
                })
            })
        });

        pauses.forEach(pause => {
            pause.addEventListener("click", () => {
                let i = pause.classList.value.split(' ')[1]
                let audio = document.getElementById(i)
                audio.pause()
                let j = pause.classList.value.split(' ')[1] + i
                document.getElementById(j).style.display = "block"
                pause.style.display = "none"
            })
        });
        Vocal.addEventListener("click", () => {
            ToggleMic();
        });
        Form.addEventListener('submit', (e) => {
            e.preventDefault();
            let msg = document.getElementById("contenue")
            let data = {pour: id,par: ID,contenue: msg.value,type: "text"}
            postUrl("http://localhost:3000/post/messages/add", data)
                .then((response) => {
                    console.log(response);
                    let message = textMessage("me", MonProfil, msg.value)
                    document.getElementById('main').insertAdjacentHTML('beforeend', message)
                    msg.value = ""
                })
                .catch(_ => alert("Une erreur est survenue lors de l'envoie de votre message"));
        })
    })
    .catch(err => {
        alert("Une erreur est survenue lors du chargement de vos messages.  Veuillez actualiser !"+err)
    })
