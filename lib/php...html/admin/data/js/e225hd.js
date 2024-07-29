
let descri = document.getElementById('descri');
let title = document.getElementById('title');
let desc = document.getElementById('desc');
let nom = document.getElementById('nom');
nom.oninput=()=>{
    title.textContent=nom.value;
}
desc.oninput=()=>{
    descri.textContent=desc.value;
}