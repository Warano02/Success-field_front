<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header("location:../../../../../php...html/users/login/index.php?href=monoshop");
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="../../../../api/app/data/donee/style.css">
    <link rel="icon" href="../../img/parametre.png">
    <script src="../../config/js/dashA.js" defer></script>
    <title>Votre Tableau de bord</title>
</head>

<body>
    <nav>
        <div class="container nav_container">
            <a href="index.html" class="nav_logo">Succes-field</a>
            <ul class="nav_items">
                <li><a href="#">A propos</a></li>
                <li><a href="#">Services </a></li>
                <li><a href="#">contact </a></li>
                <li class="nav_profile">
                    <div class="photo">
                        <img src="" alt="profile">
                    </div>
                    <ul>
                        <li><a href="#">Tableau de bord</a></li>
                        <li><a href="../../">Deconnexion</a></li>
                    </ul>
                </li>
            </ul>
            <button id="open_nav"><i class='bx bx-menu'></i></button>
            <button id="close_nav"><i class='bx bx-x'></i></button>
        </div>
    </nav>
    <section class="dashboard">
        <div class="container dashboard_container">
            <buton id="show_btn" class="small-screen"><i class='bx bxs-chevrons-right'></i></buton>
            <button id="hide_btn" class="small-screen"><i class='bx bx-chevrons-left'></i></button>
            <aside>
                <ul>
                    <li>
                        <a href="#" class="solde"><i class='bx bx-user-plus'></i>
                            <h5> </h5>
                        </a>
                    </li>
                    <li>
                        <a href="./produit/"><i class='bx bxs-edit-alt'></i>
                            <h5>Ajouter un produit</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="active"><i class='bx bx-repost'></i>
                            <h5>Mes Produits</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#"><i class='bx bx-user-plus'></i>
                            <h5>5 Ventes en cours</h5>
                        </a>
                    </li>

                    <li>
                        <a href="#"><i class='bx bx-user'></i>
                            <h5>Déposer des fonds</h5>
                        </a>
                    </li>
                    <li>
                        <a href="#"><i class='bx bxs-edit'></i>
                            <h5>Rétirer mes revenues</h5>
                        </a>
                    </li>
                </ul>
            </aside>
            <main>
                <h2 style="text-align: center;">Vos Produits</h2>
                <table>
                    <thead style="overflow: hidden;">
                        <tr>
                            <th>Nom</th>
                            <th>Description</th>
                            <th>Montant</th>
                            <th>Modifier</th>
                            <th>Supprimer</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </main>
        </div>
    </section>


    <footer class="footer">
        <div class="social">
            <a href="#"><i class='bx bxl-linkedin'></i></a>
            <a href="#"><i class='bx bxl-facebook'></i></a>
            <a href="#"><i class='bx bxl-youtube'></i></a>
            <a href="#"><i class='bx bxl-telegram'></i></a>
        </div>
        <ul class="list">
            <li><a href="#">Questions frequantes</a></li>
            <li><a href="#">Nos services</a></li>
            <li><a href="#">Temoignages</a></li>
            <li><a href="#">Contactez nous</a></li>
        </ul>
        <p class="copywriter-text">© 2024 SUCCESS-FIELD</p>
    </footer>
</body>

</html>