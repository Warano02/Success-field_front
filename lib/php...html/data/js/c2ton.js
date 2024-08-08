import { fetchUrl } from "../../../social/data/js/react.js";
let quote = document.getElementById("citation");
let author = document.getElementById("author");
function citation() {
  fetchUrl("ttp://localhost:3000/get/randomquote")
    .then(res => {
      quote.textContent = `<<${res.quote}>>`;
      author.textContent = res.author;
    })
    .catch(err => console.log(err))
}

setInterval(citation(), 300);
