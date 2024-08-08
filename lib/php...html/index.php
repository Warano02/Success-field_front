<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header('location:../../');
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Obtenir des epreuves</title>
    <link rel="icon" href="./data/img/logo/4.png">
    <link rel="stylesheet" href="./data/css/style.css">
    <link rel="stylesheet" href="./data/css/data.css">
    <link rel="stylesheet" href="./data/css/c2tin.css">
    <link rel="stylesheet" href="./data/css/s2rch.css">
    <link rel="stylesheet" href="./data/css/respo.css">
    <script src="./data/js/search.js" defer></script>
    <script src="./data/js/index.js" defer></script>
    <script src="./data/js/c2ton.js" type="module" defer></script>

</head>

<body>

    <div class="container">
        <div class="header">
            <div class="head">
                <a href="#"><img src="./data/img/logo/9.png" alt="logo" id="logo"></a>
            </div>
            <div class="mot">
                <span class="name"><a href="#">SUCCESS-FIELD</a></span>
                <p>SITE WEB DE TELECHARGEMENT DES EPREUVES UNIVERSITAIRES CAMEROUN</p>
            </div>
        </div>

        <!-- parlant du contenue proprement dit -->
        <div class="all">

            <div class="subject">
                <div id="resultat"></div>
                <div class="result-search">
                    <span class="fine"></span>
                    <span class="span">
                        <span class="hmm" id="total">175</span>
                        <span class="hmm">resultat(s) pour</span>
                        <span> <strong id="term">Tout</strong> </span>
                    </span>

                </div>

                <!-- design presentation epreuvess -->
            </div>
            <div class="pub-and-search">
                <!-- ***************************************
                **                                        **
                **    FAIRE UNE RECHERCHE                 **    
                **                                        **
                ********************************************-->
                <div class="div-search">
                    <h3>Vous pouvez rechercher une matiere ici:</h3>
                    <fieldset>
                        <legend>
                            <marquee behavior="smooth" direction="left" width="100px" time="15s"> Rechercher un terme. Faut entrer une matiere de preference</marquee>
                        </legend>
                        <form id="find">
                            <input type="text" id="search" placeholder="Entrer le nom de l'epreuve" require>
                            <button type="submit">Rechercher</button>
                        </form>
                    </fieldset>
                </div>
                <!-- ***************************************
                **                                        **
                **    CITATION DE L'HEURE                 **    
                **                                        **
                ********************************************
                -->
                <div class="citation">
                    <span id="citation">

                    </span>
                    <span id="author"></span>
                </div>


                <!-- ***************************************
                **                                        **
                **    affiche de l'utilisateur en cours   **    
                **                                        **
                ********************************************
                -->
                <div class="users-informations">
                    <img src="./data/img/bg5.jpg" alt="">
                    <div class="containt">
                        <h1>CONNECTER AVEC :</h1>
                        <div class="user-infos">
                            <img src="../api/app/data/admin-pp/<?= $_SESSION['profil'] ?>" alt="photo de profil de l'utilisateur">
                            <div class="clear">
                                <h2>Nom: <span><?= $_SESSION['nom'] ?></span></h2>
                                <h3>Classe: <span>L1INFOS</span> </h3>
                                <h4>Email : <span><?= $_SESSION['email'] ?></span></h4>
                                <h5>Nº Tel: <span><?= $_SESSION['tel'] ?></span></h5>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </div>
    </div>
  
</body>

</html>