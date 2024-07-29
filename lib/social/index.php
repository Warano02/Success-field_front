<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header('location:../php...html/users/login/index.php?href=reseaux');
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Envois du message</title>
    <link rel="stylesheet" href="../monoshop/data/css/scg.css" />
</head>

<body>
    <div class="container">
        <img src="../monoshop/data/img/f.png" alt="images de notre loaging">
        <div class="items">
            <span class="item active ok"></span>
            <span class="item"></span>
            <span class="item"></span>
            <span class="item"></span>
        </div>
    </div>
    <script src="./data/js/script.js"></script>
</body>

</html>