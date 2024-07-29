<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header('location:../../../php...html/users/login/index.php?href=reseaux');
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mon profil</title>
    <link rel="stylesheet" href="../css/styl.css" />
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>
<div class="container" >
  <div class="header">
      <div class="header_background">
        <span><img src="../img/utils/camera.svg"></span>
      </div>
      <div class="header_name">
      <i class='bx bx-arrow-back'></i> <span><?=$_SESSION["nom"]?></span>
      <a href="">Changer de profil</a>
      </div>
      <div class="profil_picture">
        <img src="../../../api/app/data/admin-pp/<?=$_SESSION["profil"]?>" alt="">
        <div class="span"><img src="../img/utils/camera.svg"></div>
      </div>
  </div>
  <div class="user_name">
    <p><?=$_SESSION["nom"]?></p>
    <span class="span"><span>488</span>publication(s)</span>
    <button class="publication"><i class='bx bx-plus'></i> Ajouter une publication</button>
   <button class="edit_profil"><i class='bx bx-pencil'></i> Modifier le profil</button>
    <span class="share">
    <i class='bx bxs-share'></i>
    </span>
  </div>
  <hr>
</div>
</body>
</html>