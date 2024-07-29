let mot = document.getElementById("mot");
let test = mot.textContent;
console.log(test);
if (test === "") {
  mot.style.display = "none";
} else if (test !== "Erreur") {
  mot.classList.remove("invalid");
  mot.classList.add("valid");
}

