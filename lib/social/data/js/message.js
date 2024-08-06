/**
 * Script de la page ../pages/message.php
 */

let plays = document.querySelectorAll(".play")
let pauses = document.querySelectorAll(".pause")
let Form = document.getElementById('form')
const request = indexedDB.open('Success-field');

const xhr = new XMLHttpRequest()
xhr.open('GET', "../config/php/yo.php", true)
xhr.onloadend = () => localStorage.setItem("moi", xhr.responseText)
xhr.send()

request.onerror = function (event) {
    alert("Une erreur Inconnue est survenue. Veuillez actualiser")
    console.error('Erreur lors de l\'ouverture de la base de données:', event.target.error);
};

request.onsuccess = function (event) {
    const db = event.target.result;
    console.log('Base de données ouverte avec succès');
    // Vous pouvez maintenant utiliser `db` pour récupérer vos données
};
let mediaRecorder;
let audioChunks = [];
// Vérifiez si le navigateur prend en charge l'API d'enregistrement
// if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//     const startButton = document.getElementById('start');
//     startButton.addEventListener('click', async () => {
//         // Demande l'accès au microphone
//         try {
//             const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//             mediaRecorder = new MediaRecorder(stream);

//             // Événement pour rassembler les morceaux audio
//             mediaRecorder.ondataavailable = event => {
//                 audioChunks.push(event.data);
//             };

//             // Commence l'enregistrement
//             mediaRecorder.start();
//             startButton.classList.add('recording'); // Option pour ajouter un style d'enregistrement
//             startButton.style.color = 'red';
//             // Arrête l'enregistrement après 5 secondes (ou selon vos besoins)
//             setTimeout(() => {
//                 mediaRecorder.stop();
//                 startButton.style.color = 'red'; // Restaure le texte initial
//                 createAudioFile();
//             }, 10000); // Enregistrer pendant 5 secondes

//         } catch (error) {
//             console.error("Une erreur est survenue lors de l'accès au microphone :", error);
//         }
//     });

//     // Fonction pour créer un fichier audio à partir des morceaux enregistrés
//     const createAudioFile = () => {
//         mediaRecorder.onstop = async () => {
//             const audioBlob = new Blob(audioChunks, { type: 'audio/mpeg' });
//             audioChunks = []; // Réinitialiser le tableau
//             const audioUrl = URL.createObjectURL(audioBlob);

//             // Vous pouvez créer un élément audio pour écouter le message enregistré
//             let ecoute=``
//             const audioElement = document.createElement('audio');
//             audioElement.controls = true;
//             audioElement.src = audioUrl;
//             document.body.appendChild(audioElement); // Ajoute l'élément audio au corps du document

//             // Envoyer le message vocal au serveur
//             await uploadAudio(audioBlob);
//         };
//     };

//     // Fonction pour télécharger l'audio sur le serveur
//     const uploadAudio = async (audioBlob) => {
//         const formData = new FormData();
//         formData.append('audio', audioBlob, 'message_vocal.mp3'); // Nommez le fichier comme vous le souhaitez

//         try {
//             const response = await fetch('/upload', {
//                 method: 'POST',
//                 body: formData
//             });

//             if (response.ok) {
//                 console.log('Message vocal envoyé avec succès');
//             } else {
//                 console.error('Erreur lors de l\'envoi du message vocal');
//             }
//         } catch (error) {
//             console.error('Erreur lors de la connexion au serveur :', error);
//         }
//     };

// } else {
//     console.error("L'API d'enregistrement n'est pas prise en charge par ce navigateur.");
// }
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

Form.addEventListener('submit', (e) => {
    e.preventDefault();
    let fOrm = new FormData(Form)
    let regEx1 = new RegExp(/\?id=\d{2,}/)
    if (regEx1.test(window.location.href)) {
        let id = parseInt((window.location.href.match(regEx1))[0].match(/\d{2,}/g)[0])
        console.log(id);
        fOrm.append('pour', id)
        fOrm.append("par", (JSON.parse(localStorage.getItem("moi"))).UnId)
        fOrm.append("type", "text")
        let msg = document.getElementById("contenue")
        let data = {
            pour: id,
            par: (JSON.parse(localStorage.getItem("moi"))).UnId,
            contenue: msg.value,
            type: "text"
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "http://localhost:3000/post/messages/add", true)
        xhr.setRequestHeader("Content-Type", "application/json")
        xhr.setRequestHeader("X-API_KEY", "Warano0101101225@carineteoi@gmzil58ldl.hdk+")
        xhr.onloadend = () => {
            if (xhr.status === 201 && xhr.readyState == 4) {
                let message = ` <div class="you">
                                <p>${msg.value}</p>
                                </div>`
                document.getElementById('main').insertAdjacentHTML('beforeend',message)
                msg.value=""
            } else {
                alert("Une erreur est survenue lors de l'envoie de votre message")
            }
        }

        xhr.send(JSON.stringify(data))
    } else {
        window.location.href = "./"
    }


})

