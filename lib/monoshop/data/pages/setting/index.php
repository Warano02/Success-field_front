<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header("location:../../../../php...html/users/login/index.php?href=monoshop");
}
?>
<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Envois du message</title>
    <link rel="stylesheet" href="../../css/scg.css" />
  </head>
  <body>
  <div class="container">
      <img src="../../img/img.jpg" alt="" />
    </div>
    <script src="../../config/js/scg.js"></script>
  </body>
</html>
