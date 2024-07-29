
<!-- page terminer. juste a remplacer les liens -->

<?php
session_start();
if (isset($_SESSION['yetedi'])) {
    header('location:../');
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./data/css/style.css">
    <link rel="icon" href="./data/img/ico.png">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Inscription</title>
</head>

<body>
    <section class="contact" id="contact">
        <h2 class="heading">In<span>script</span>ion</h2>

        <form method="POST" action="./data/php/t1.php" id="myForm">
            <div class="input-group">
                <div class="input-box">
                    <input type="email" name="email" id="mail" placeholder="Successfield@gmail.com" autocomplete="given-mail" required>
                    <input type="text" name="phone" id="tel" placeholder="N° Tel." required>

                    <input type="text" name="name" id="name" placeholder="Votre nom..." autocomplete="given-name" required>
                    <input type="number" name="level" id="level" min="1" max="8" placeholder="Veuillez entrer votre niveau actuel  " required>

                    <input type="password" name="password" id="mdp1" placeholder="Mot de passe" required><img src="./data/img/cacher.jpg" class="image" id="im1" alt="">
                    <input type="password" name="mdp2" id="mdp2" placeholder="Confirmer le mot de passe" required><img src="./data/img/cacher.jpg" id="img2" class="image gta" alt="">
                </div>
                <div class="sexe">
                    <div class="tcheckpass">
                        <div class="load "></div>
                    </div>
                    <input type="radio" name="sexe" value="masculin"> Homme<input type="radio" name="sexe" value="feminin"> Femme<input type="radio" name="sexe" value="autre" disabled> Autre
                    <div class="link" align="center" style="padding-top: 30px;"><a href="./login/index.php">Deja inscrit</a></div>
                </div>
            </div>
            <div class="input-group-2">
                <input type="submit" class="btn" style="width: 200px; height: 45px;" name="envoyer" value="Envoyer">
            </div>
        </form>
    </section>
    <footer class="footer">
        <div class="social">
            <a href="#"><i class='bx bxl-linkedin'></i></a>
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-youtube'></i></a>
            <a href="#"><i class='bx bxl-telegram'></i></a>
        </div>
        <ul class="list">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Nos services</a></li>
            <li><a href="#">Temoignages</a></li>
            <li><a href="#">Contactez nous</a></li>
        </ul>
        <p class="copywriter-text">© 2024 Success-field</p>
    </footer>
</body>
<script src="./data/js/apps.js" type="module"></script>

</html>