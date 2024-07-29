<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header('location:../../../../');
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../css/st1.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <title>Choisir un partenaire</title>
    <link rel="icon" href="../img/pexels-fotios-photos-3972441.jpg">
</head>

<body>
    <div class="wrapper">
        <section class="users">
            <header>
                <div class="contents">
                    <img src="../../../api/app/data/admin-pp/<?php echo $_SESSION['profil']; ?>" alt="profil">
                    <div class="details">
                        <span><?php echo $_SESSION['nom']; ?></span>
                        <p>Online</p>
                    </div>
                </div>
                <a href="../../../php...html/" class="logout" id="logout">RAE</a>
            </header>
            
            <div class="search">
                <span class="text">Choisir un partenaire pour discuter</span>
                <input type="search" id="searchUser" placeholder="Recherer par nom...">
                <button><i class='bx bx-search-alt'></i></button>
            </div>
            <div class="users-list" id="users-list">
               
            </div>
        </section>
    </div>
    <script src="../js/st1.js"></script>
    <script src="../js/search.js"></script>
<!-- <script src="../js/request.js"></script> -->


</body>

</html>