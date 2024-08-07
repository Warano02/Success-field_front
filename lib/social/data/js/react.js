import { API_KEY } from "../../../api/app/data/donee/env.js";
let can_record = false;
let is_recording = false;
let recorder = null;
let chunks = [];
export function userId(url) {
    let regEx1 = new RegExp(/\?id=\d{2,}/)
    let regEx2 = new RegExp(/\d{2,}/g)
    let id = parseInt((url.match(regEx1))[0].match(regEx2)[0])
    return id
}
export function textMessage(Author, Profil, Message) {
    let result
    if (Author == "Interlocutor") {
        result = `<div class="interlocutor">
                    <img src="../../../api/app/data/admin-pp/${Profil}">
                    <p>${Message}</p>
                </div>`
    } else if (Author == "me") {
        result = `<div class="you">
                   <p>${Message}</p>
                </div>`
    }
    return result
}


export function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.setRequestHeader("X-API_KEY", API_KEY);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onloadend = () => {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            } else {
                reject(new Error("Erreur lors de la récupération des données"));
            }
        };
        xhr.onerror = () => {
            reject(new Error("Erreur de requête."));
        };
        xhr.send();
    });
}

export function postUrl(url, data) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        xhr.setRequestHeader("X-API_KEY", API_KEY);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.onloadend = () => {
            if (xhr.status == 201 && xhr.readyState == 4) {
                let result = JSON.parse(xhr.responseText)
                resolve(result);
            } else {
                reject({ error: true, msg: "Une erreur est survenue lors de l'execution de votre requête" })
            }
            xhr.onerror = () => {
                reject(new Error("Erreur de requête."));
            };
            xhr.send(JSON.stringify(data));
        }
    })
}
export function defaultMessaege(profil) {
    return `<div class="interlocutor">
               <img src="../../../api/app/data/admin-pp/${profil}" alt="">
               <p>Hey 👋 Laisse ton message et je te repond d'ici pau</p>
            </div>
            `
}

function audio_message_form(Author, profil, id, url) {
    let result
    switch (Author) {
        case "Interlocutor":
            result = `<div class="interlocutor audio">
               <img src="../../../api/app/data/admin-pp/${profil}" class="profil" >
               <audio src="${url}" type="audio/ogg" id="au${id}"></audio>
               <div class="btn-list">
                  <div class="progress">
                     <span>
                           <span class="point " id="au${id}au${id}"></span>
                      </span>
                  </div>
                  <img src="../img/utils/download.png" class="play au${id} ${id + 1}" id="${id + 1}au${id}"> 
                  <img src="../img/utils/download (1).png"  class="pause au${id} ${id + 1}" id="au${id}${id + 1}">
               </div>
            </div>`
            break;
        default:
            result = `<div class="you myAudio">
                          <img src="../../../api/app/data/admin-pp/${profil}" alt="Votre photo de profil" class="profil">
                          <audio src="${url}" type="audio/ogg" id="au${id}"></audio>
                          <div class="btn-list">
                                <div class="progress">
                                  <span>
                                          <span class="point" id="au${id}au${id}"></span>
                                   </span>
                               </div>
                               <img src="../img/utils/download.png" class="play au${id} ${id + 1} controls" id="${id + 1}au${id}"> 
                               <img src="../img/utils/download (1).png"  class="pause au${id} ${id + 1} controls" id="au${id}${id + 1}">
                          </div>
                       </div>`
            break;
    }
    return result
}
export function audioMessage(Author, profil, id, valeur) {
    return new Promise((resolve, reject) => {
        fetchUrl(`http://localhost:3000/get/message/audio/${valeur}`)
            .then((response) => {
                return response.blob();
            })
            .then(obj => {
                const audioURL = URL.createObjectURL(obj)
                const result = audio_message_form(Author, profil, id, audioURL)
                resolve(result)
            })
            .catch(error => reject(error))
    })
}
export function SetupAudio() {
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(SetupStream)
        .catch(err => {
            return "Vérifiez vos permissions.";
        });
}
export function SetupStream(stream) {
    recorder = new MediaRecorder(stream);
    can_record = true;

    recorder.ondataavailable = e => {
        chunks.push(e.data);
    };
    recorder.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/ogg;codecs=opus" }); // Utilisez audio/ogg sans codecs
        chunks = [];
        uploadAudio(blob);
    };
}

function uploadAudio(audioBlob) {
    let id = JSON.parse(localStorage.getItem("moi")).UnId
    let id2 = userId(window.location.href)
    const formData = new FormData();
    const audioURL=window.URL.createObjectURL(blob);
    console.log("L'enregistrement a bien été effectuer ");
    
    formData.append('audioFile', audioBlob, `audio_${Date.now()}.ogg`); // Nommez le fichier
    formData.append("par", id)
    formData.append("pour", id2)
    fetch("http://localhost:3000/post/message/add/audio", {
        method: 'POST',
        body: formData,
    })
        .then((response) => {
            response = JSON.parse(response)
            console.log(response);
            const a=document.createElement("a")
            
            let audio = `
            <div class="you myAudio">
                <img src="../../../api/app/data/admin-pp/${JSON.parse(localStorage.getItem("moi")).profil || 'admin.png'}" alt="Profil" class="profil">
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
            })
        })
        .catch(err => alert(err))

}

export function ToggleMic() {
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