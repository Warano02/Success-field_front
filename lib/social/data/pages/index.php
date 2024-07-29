<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header('location:../../../php...html/users/login/index.php?href=reseaux');
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Success-field</title>
  <link rel="stylesheet" href="../css/style.css" />
  <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" /> -->
  <script src="../js/script2.js" defer></script>
</head>

<body>
  <div class="container" >
    <div class="Header">
      <header>
        <div class="hg">
          <span class="heure" id="heure">08:11</span>
          <span class="icon">
            <i class="fa-brands fa-whatsapp"></i>
            <i class="fa-brands fa-telegram"></i>
            <i class="fa-duotone fa-p"></i>
            <i class="fa-solid fa-circle"></i>
          </span>
        </div>
        <div class="hd">
          <span class="icon">
            <i class="fa-solid fa-rss"></i>
            <i>LTE<i class="fa-solid fa-signal"></i></i>
            <i><i class="fa-solid fa-battery-half"></i>65%</i>
          </span>
        </div>
      </header>
      <div class="logos">
        <div class="logo">
          <img src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="logo de facebook" />
        </div>
        <div class="g">
          <span class="ii"><i class="fa-solid fa-plus"></i></span>
          <span class="ii"><i class="fa-solid fa-magnifying-glass"></i></span>
          <span class="ii" id="om"> <i class="fa-solid fa-bars"></i></span>
        </div>
      </div>
      <div class="tout">
        <span class="i"><i class="fa-solid fa-house"></i></span>
        <span class="np">15 <sup>+</sup></span>
        <span class="i"><i class="fa-solid fa-users"></i></span>
        <span class="i"><i class="fa-brands fa-facebook-messenger"></i></span>
        <span class="mes">3</span>
        <span class="i"><i class="fa-sharp fa-regular fa-bell"></i></span>
        <span class="i"><i class="fa-sharp fa-solid fa-tv-music"></i></span>
        <span class="i"><i class="fa-sharp fa-solid fa-shop"></i></span>
      </div>
    </div>
    <div class="pro">
      <img src="../../../api/app/data/admin-pp/<?=$_SESSION['profil']?>" alt="Profil de l'utilisateur en cours d'utilisation" />
      <span class="ell"></span>
      <input type="text" id="tpb" placeholder="A quoi pensez-vous  ?" />
      <i class="phi">
        <i class="fa-regular fa-images"></i>
      </i>
    </div>
   
    
    <div id="ihd"></div>

  </div>
</body>

</html>