
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "../config/request/old.php", true);
  xhr.onloadend = () => {
    if (xhr.status === 200 && xhr.readyState === 4) {
      const resul = xhr.response;
      document
        .getElementById("users-list")
        .insertAdjacentHTML("afterbegin", resul);
    } else {
      alert(
        "Une erreur est survenue lors de la recuperation de vos messages. Actualisez"
      );
    }
  };
  xhr.send();

