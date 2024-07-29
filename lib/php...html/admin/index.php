<?php
session_start();
if (!isset($_SESSION['yetedi'])|| !isset($_SESSION["isAmin"])) {
    header('location:./pages/logIn.php');
}
?>
<!DOCTYPE html>
<html lang="en" class="h-100" data-bs-theme="auto">

<head>
    <script src="/docs/5.3/assets/js/color-modes.js"></script>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />

    <title>ACCEUIL</title>
    <link rel="icon" href="data:image/png;base64,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">
    <link rel="canonical" href="https://getbootstrap.com/docs/5.3/examples/cover/" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />

    <link href="/docs/5.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous" />
    <!-- Favicons -->
    <link rel="apple-touch-icon" href="/docs/5.3/assets/img/favicons/apple-touch-icon.png" sizes="180x180" />
    <link rel="icon" href="/docs/5.3/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
    <link rel="icon" href="/docs/5.3/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
    <link rel="manifest" href="/docs/5.3/assets/img/favicons/manifest.json" />
    <link rel="mask-icon" href="/docs/5.3/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9" />
    <link rel="icon" href="/docs/5.3/assets/img/favicons/favicon.ico" />
    <meta name="theme-color" content="#712cf9" />

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
            background-color: rgba(0, 0, 0, 0.1);
            border: solid rgba(0, 0, 0, 0.15);
            border-width: 1px 0;
            box-shadow: inset 0 0.5em 1.5em rgba(0, 0, 0, 0.1),
                inset 0 0.125em 0.5em rgba(0, 0, 0, 0.15);
        }

        .b-example-vr {
            flex-shrink: 0;
            width: 1.5rem;
            height: 100vh;
        }

        .bi {
            vertical-align: -0.125em;
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

    <!-- Custom styles for this template -->
    <link href="cover.css" rel="stylesheet" />
</head>

<body class="d-flex h-100 text-center text-bg-dark">
    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
        <symbol id="check2" viewBox="0 0 16 16">
            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
        </symbol>
        <symbol id="circle-half" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
        </symbol>
        <symbol id="moon-stars-fill" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
            <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
        </symbol>
        <symbol id="sun-fill" viewBox="0 0 16 16">
            <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
        </symbol>
    </svg>

    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
            <div>
                <h3 class="float-md-start mb-0">Success-field</h3>
                <nav class="nav nav-masthead justify-content-center float-md-end">
                    <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Modifié mes donnee</a><span style="width: 30px;"></span>
                    <!-- <a class="nav-link fw-bold py-1 px-0" href="#">Features</a> -->
                    <a class="nav-link fw-bold py-1 px-0" href="#">ACCEUIL</a>
                </nav>
            </div>
        </header>

        <main class="px-3">
            <h1>BIENVENUE Mr/Mme <?= $_SESSION['nom'] ?> 😍😍😍</h1>
            <p class="lead">
                Merci de votre visite sur notre site de téléchargement d'épreuves ! Pour déposer vos épreuves, veuillez cliquer sur le boutton ci dessous.
                Cela vous permettra de télécharger vos épreuves rapidement et facilement. Nous sommes impatients de les recevoir et de les partager avec notre communauté !
                Notez que nous vous demandons de respecter les règles de notre site et de ne pas télécharger d'épreuves illégales ou non autorisées.
                Si vous avez des questions ou avez besoin d'aide, n'hésitez pas à nous contacter à <a href="mailto:carineteoi@gmail.com">Service client </a>.
                <strong> Merci pour votre compréhension et votre collaboration !!!</strong>
            </p>
            <p class="lead">
                <a href="./pages/depot.php" class="btn btn-lg btn-light fw-bold border-white bg-white">Ajouter une epreuve au site</a>
            </p>
        </main>

        <footer class="mt-auto text-white-50">
            <p>
                Creer par:
                <a href="mailto:jeancalvaindoumba@gmail.com" class="text-white">Doumba Jean Calvain </a>,
                Et <a href="mailto:carineteoi@gmail.com" class="text-white"><strong>Hinsou Kala Felix </strong> </a>.
            </p>
        </footer>
    </div>
    <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>

</html>