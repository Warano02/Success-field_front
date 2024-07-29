function citation() {
  const category = [
    "age",
    "alone",
    "amazing",
    "anger",
    "architecture",
    "art",
    "attitude",
    "beauty",
    "best",
    "birthday",
    "buissness",
    "car",
    "change",
    "communication",
    "computers",
    "cool",
    "courage",
    "dad",
    "dating",
    "death",
    "design",
    "dreams",
    "education",
    "environemental",
    "equality",
    "experience",
    "failure",
    "faith",
    "family",
    "famous",
    "fear",
    "fitness",
    "food",
    "forgiveness",
    "freedom",
    "friendship",
    "funny",
    "future",
    "god",
    "good",
    "government",
    "graduiation",
    "great",
    "happiness",
    "health",
    "history",
    "home",
    "hope",
    "humor",
    "imagination",
    "inspirational",
    "inteligence",
    "jealousy",
    "knowledge",
    "leadership",
    "learning",
    "legal",
    "life",
    "love",
    "marriage",
    "medical",
    "men",
    "mom",
    "money",
    "morning",
    "movies",
    "success",
  ];
  let i = 0;
  let quote = document.getElementById("citation");
  let author = document.getElementById("author");
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.api-ninjas.com/v1/quotes?category=${category[i]}`,
    true
  );
  xhr.setRequestHeader("X-Api-Key", "Og8w6ON1m0OdQcl8XzMLTA==5nxZbHitb5zguEgf");

  xhr.setRequestHeader("content-Type", "application/json");
  xhr.onloadend = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const res = JSON.parse(xhr.responseText);
      quote.textContent = `<<${res[0].quote}>>`;
      author.textContent = res[0].author;
      i = 0 ? i == category.length : i++;
    } else {
      console.error("erreur lors de la recuperation de la citation");
      i = 0 ? i == category.length : i++;
    }
  };
  xhr.send();
}

setInterval(citation(), 300);
