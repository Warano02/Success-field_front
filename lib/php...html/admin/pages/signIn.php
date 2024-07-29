<?php
session_start();
if (isset($_SESSION['yetedi'])) {
  header('location:../');
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>inscription</title>
  <link rel="icon" href="data:image/png;base64,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" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="stylesheet" href="../data/css/aSingn.css" />
</head>

<body>
  <main>
    <form id="form1" method="post">
      <h3>Vos informations</h3>
      <input type="text" placeholder="Veuillez preciser votre nom et prenom" id="username" name="username" required />
      <input type="text" id="userplace" placeholder="Lieu de residence actuel" required />
      <input type="text" id="matiere" placeholder="Votre matiere enseigner" required />
      <div class="btn-box">
        <button id="next1" type="button" name="next1">Suivant ☛</button>
      </div>
    </form>
    <form id="form2" method="post">
      <h3>Contact</h3>
      <input type="text" maxlength="15" id="usernumber" placeholder="N. Telephone" name="numerodetel" required />
      <input type="email" id="usermail" placeholder="Addresse e-mail" name="email" required />
      <input type="number" id="userrecuperations" placeholder=" Second N. Telephone" />
      <div class="btn-box">
        <button id="back1" type="button">☚ Retour</button>
        <button id="next2" type="button" name="next2">Suivant ☛</button>
      </div>
    </form>
    <form id="form3" method="post">
      <h3>confidentialité</h3>
      <input type="password" id="pwr" placeholder="Cree un mot de passe ." name="pwr" required />
      <img src="../data/img/cacher.jpg" id="imo" class="cacher" />
      <input type="password" id="cpwr" placeholder="Confirmer mot de passe ." required /><img src="../data/img/cacher.jpg" id="img2" class="voir" />

      <div class="btn-box">
        <button id="back2" type="button">☚ Retour</button>
        <button type="submit" id="terminer" name="envoyer">
          <i class="fa-sharp fa-solid fa-upload"></i>terminer
        </button>
      </div>
    </form>
    <div class="step-row">
      <div id="progress"></div>
      <div class="step-col">Etape1</div>
      <div class="step-col">Etape2</div>
      <div class="step-col">Etape3</div>
    </div>
  </main>
  <footer id="message">
    <h3>Le mot de passe doit contenir les elements suivants:</h3>
    <p id="letter" class="invalid">une lettre minuscule</p>
    <p id="capital" class="invalid">une lettre magiscule</p>
    <p id="number" class="invalid">un chiffre</p>
    <p id="length" class="invalid">8 carracteres minimum</p>
  </footer>
  <script src="../data/js/aSign.js" type="module"></script>
</body>

</html>