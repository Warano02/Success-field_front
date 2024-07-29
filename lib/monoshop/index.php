<?php 
session_start();
if (!isset($_SESSION['yetedi'])) {
   header('location:../php...html/users/login/index.php?href=monoshop');
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Monoshop</title>
   <link rel="stylesheet" href="./data/css/style.css">
   <script src="./data/config/js/script.js" defer></script>
</head>

<body>
    <div class="container">
        <span class="red"></span>
        <span class="blue"></span>
    </div>
</body>

</html>