/**
 * Script de la page ../pages/message.php
 */

let plays = document.querySelectorAll(".play")
let pauses = document.querySelectorAll(".pause")
let Form = document.getElementById('form')
let nom = document.getElementById('nom')
let profil = document.getElementById('profil')
let Vocal = document.getElementById("start")
document.getElementById('re').addEventListener('click', () => window.location.href = './messages.php')
nom.textContent = sessionStorage.getItem("nom")
profil.src = "../../../api/app/data/admin-pp/" + sessionStorage.getItem('profil')

const xhr = new XMLHttpRequest()
xhr.open('GET', "../config/php/yo.php", true)
xhr.onloadend = () => localStorage.setItem("moi", xhr.responseText)
xhr.send()

let can_record = false;
let is_recording = false;
let recorder = null;
let chunks = [];

if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert('Votre navigateur ne supporte pas la capture audio.');
}

Vocal.addEventListener("click", () => {
    ToggleMic();
});

function SetupAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(SetupStream)
        .catch(err => {
            console.error("Une erreur est survenue: " + err);
            alert("Vérifiez vos permissions.");
        });
}

function SetupStream(stream) {
    recorder = new MediaRecorder(stream);
    can_record = true;

    recorder.ondataavailable = e => {
        chunks.push(e.data);
    };
    recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/ogg;codecs=opus" }); // Utilisez audio/ogg sans codecs

        chunks = [];
        const audioURL = window.URL.createObjectURL(blob);
        console.log("Audio URL créée : ", audioURL); // Vérifiez si l'URL est bien créée
        uploadAudio(blob);
        let moi = JSON.parse(localStorage.getItem("moi")) || {};
        let audio = `
            <div class="you myAudio">
                <img src="../../../api/app/data/admin-pp/${moi.profil || 'admin.png'}" alt="Profil" class="profil">
                <audio src="${audioURL}"></audio>
                <div class="btn-list">
                    <div class="progress">
                        <span>
                            <span class="point" id="au2au2"></span>
                        </span>
                    </div>
                    <img src="../img/utils/download.png" class="play au2 3 controls"> 
                    <img src="../img/utils/download (1).png" class="pause au2 3 controls">
                </div>
            </div>
        `;
        document.getElementById("main").insertAdjacentHTML('beforeend', audio);
        const newAudio = document.querySelector(`audio[src="${audioURL}"]`);
        newAudio.onended = () => {
            console.log("L'audio a fini de se jouer");
        };
        newAudio.play().then(() => {
            console.log("Audio est en lecture");
        }).catch(error => {
            console.error("Erreur lors de la lecture de l'audio : ", error);
        });
    };
}
async function uploadAudio(audioBlob) {
    let moi = JSON.parse(localStorage.getItem('moi'))
    const formData = new FormData();
    formData.append('audioFile', audioBlob, `audio_${Date.now()}.ogg`); // Nommez le fichier
    formData.append("par", moi.UnId)
    let regEx1 = new RegExp(/\?id=\d{2,}/)
    let id = parseInt((window.location.href.match(regEx1))[0].match(/\d{2,}/g)[0])
    formData.append("pour", id)
    try {
        const response = await fetch('http://localhost:3000/post/message/add/audio', {
            method: 'POST',
            body: formData,
        });

        if (response.ok) {
            const text = await response.text();
            console.log(text); // Affiche le message de succès
        } else {
            console.error('Erreur lors de l\'upload:', response.statusText);
        }
    } catch (error) {
        console.error('Erreur de réseau:', error);
    }
}

function ToggleMic() {
    if (!can_record) return;

    is_recording = !is_recording;
    if (is_recording) {
        Vocal.classList.add("start-record");
        Vocal.classList.remove("stop-record");
        recorder.start();
    } else {
        Vocal.classList.remove('start-record');
        Vocal.classList.add("stop-record");
        recorder.stop();
    }
}

window.onload = () => {
    SetupAudio();
};

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
                document.getElementById('main').insertAdjacentHTML('beforeend', message)
                msg.value = ""
            } else {
                alert("Une erreur est survenue lors de l'envoie de votre message")
            }
        }

        xhr.send(JSON.stringify(data))
    } else {
        window.location.href = "./"
    }


})

