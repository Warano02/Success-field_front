<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header('location:../../php...html/users/login/index.php?href=monoshop');
}
?>
<!doctype html>
<html lang="fr" data-bs-theme="auto">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="WaraMart, votre destination shopping préférée ! Découvrez des trésors inattendus et bénéficiez d'une expérience exceptionnelle avec nos vêtements, accessoires, objets de décoration,livre,oeuvre de qualiter et cadeaux originaux.">
    <meta name="author" content="By Warano.+237621092130">
    <meta name="generator" content="Hugo 0.122.0">
    <title>La Boutique de l'étudiant</title>
    <link rel="icon" href="./img/bgd.jpg">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" integrity="sha384-0pUGZvbkm6XF6gxjEnlmuGrJXVbNuzT9qBBavbLwCsOGabYfZo0T0to5eqruptLy" crossorigin="anonymous"></script>
    <script src="./config/js/produit.js" defer></script>
    <!-- <script src="./js/i.js" defer></script> -->
    <style>
        .bd-placeholder-img {
            font-size: 1.125rem;
            text-anchor: middle;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
        }

        @media (min-width: 768px) {
            .bd-placeholder-img-lg {
                font-size: 3.5rem;
            }
        }

        .b-example-divider {
            width: 100%;
            height: 3rem;
            background-color: rgba(0, 0, 0, .1);
            border: solid rgba(0, 0, 0, .15);
            border-width: 1px 0;
            box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
        }

        .b-example-vr {
            flex-shrink: 0;
            width: 1.5rem;
            height: 100vh;
        }

        .bi {
            vertical-align: -.125em;
            fill: currentColor;
        }

        .nav-scroller {
            position: relative;
            z-index: 2;
            height: 2.75rem;
            overflow-y: hidden;
        }

        .nav-scroller .nav {
            display: flex;
            flex-wrap: nowrap;
            padding-bottom: 1rem;
            margin-top: -1px;
            overflow-x: auto;
            text-align: center;
            white-space: nowrap;
            -webkit-overflow-scrolling: touch;
        }

        .btn-bd-primary {
            --bd-violet-bg: #712cf9;
            --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

            --bs-btn-font-weight: 600;
            --bs-btn-color: var(--bs-white);
            --bs-btn-bg: var(--bd-violet-bg);
            --bs-btn-border-color: var(--bd-violet-bg);
            --bs-btn-hover-color: var(--bs-white);
            --bs-btn-hover-bg: #6528e0;
            --bs-btn-hover-border-color: #6528e0;
            --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
            --bs-btn-active-color: var(--bs-btn-hover-color);
            --bs-btn-active-bg: #5a23c8;
            --bs-btn-active-border-color: #5a23c8;
        }

        .bd-mode-toggle {
            z-index: 1500;
        }

        .bd-mode-toggle .dropdown-menu .active .bi {
            display: block !important;
        }
    </style>
</head>

<body>
    <header data-bs-theme="dark">
        <div class="collapse text-bg-dark" id="navbarHeader">
            <div class="container">
                <div class="row">
                    <div class="col-sm-8 col-md-7 py-4">
                        <h4>A propos de la boutique</h4>
                        <p class="text-body-secondary">
                            WaraMart, votre destination shopping préférée ! Découvrez des trésors inattendus et bénéficiez d'une expérience exceptionnelle avec nos vêtements, accessoires, objets de décoration et cadeaux originaux. </p>
                    </div>
                    <div class="col-sm-4 offset-md-1 py-4">
                        <h4><a href="./pages/">Mon Tableau de Bord</a></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="navbar navbar-dark bg-dark shadow-sm">
            <div class="container">
                <a href="#" class="navbar-brand d-flex align-items-center">
                    <img src="../../api/app/data/admin-pp/admin.png" width="50" height="50" style="border-radius:10px;">
                    <strong>WaraMart</strong>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </header>
    <main>
        <div class="album py-5 bg-body-tertiary">
            <div class="container">

                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col" id="produit-brute">

                    </div>

                </div>
    </main>

    <!-- <script>
        document.querySelectorAll('.acheter').forEach(button => {
            button.addEventListener('click', () => {
                const nom = button.getAttribute('data-image');
                const prix = button.getAttribute('data-prix');

                let pri = prix * 650;
                const dec = button.getAttribute('data-key');
                const message = "Salue WARNO😎! Je suis intéressé par ce produit. Pouvez-vous m'en dire plus ?";
                const phone = "+237621092130"; // Remplacez par votre numéro de téléphone WhatsApp
                const description = "\n\nINFORMATIONS COMPLETS SUR LE PRODUIT :\n Nom: " + nom + "\n Prix :" + prix + "€ soit " + pri + "Francs cfa \nDescription :" + dec + "\n\n Merci de me repondre dans les plus brefs delais 😍";

                const whatsappLink = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}%0A%0A![Produit]${encodeURI(description)}`;

                window.location.href = whatsappLink;
            });
        });
    </script> -->
</body>

</html>