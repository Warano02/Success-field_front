<!-- page terminer. juste a remplacer les liens -->

<?php
session_start();
if (isset($_SESSION['yetedi'])) {
    header('location:../../');
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../data/css/style.css">
    <link rel="icon" href="../data/img/images.png">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Se connecter</title>
</head>

<body>
    <section class="contact" id="contact">
        <h2 class="heading">Conne<span>xion</span></h2>
        <form action="" method="post" id="form">
            <div class="input-group">
                <div class="tcheckpass"></div>
                <div class="input-box">
                    <input type="email" style="background-color: darkgray; color:black;" name="mail" placeholder="successfield@gmail.com" required>
                    <input type="password" style="background-color: darkgray; color:black;" name="password" required>
                </div>
                <div class="input-box">
                    <div class="link" align="center">
                        <a href="../">Pas inscrit</a>
                        <a href="#">Mot de passe oublie</a>
                    </div><br><br><br>
                    <input type="submit" style="background-color: #00ffee; color: black;" class="btn" name="envoyer" value="Connexion">
                </div>
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
            <li><a href="../index.html#services">Nos services</a></li>
            <li><a href="../index.html#temoignages">Temoignages</a></li>
            <li><a href="../index.html#contact">Contactez nous</a></li>
        </ul>
        <p class="copywriter-text">© 2024 Success-field</p>
    </footer>
</body>
<script src="../data/js/logIn.js" type="module"></script>

</html>