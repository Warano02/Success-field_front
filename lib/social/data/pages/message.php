<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header('location:../../../php...html/users/login/index.php?href=iuiuibuicciuihibdshibdjcbdicu_çiosduçduççjsd');
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Causerie</title>
    <link rel="stylesheet" href="../css/message.css">
    <link
    href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
    rel="stylesheet"
  /> 
 <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
    integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body>
    <div class="container">
<div class="user">
    <i class='bx bx-arrow-back' id="re"></i>
    <img src="../img/publication/img/joyce.jpg" id="profil" alt="Votre tof de profil" >
    <span id="nom">Heu Wang Warano</span>
</div>
<main id="main">
    <!-- <div class="interlocutor">
        <img src="../img/publication/img/joyce.jpg" alt="">
        <p>Salut !</p>
    </div>
    <div class="you">
        <p>Lorem ipsum dolor sit amet.</p>
    </div>
    <div class="interlocutor audio">
        <img src="../img/publication/img/joyce.jpg" class="profil" >
        <audio src="../vocaux/03-VVS.mp3" type="audio/mpeg" id="au1"></audio>
        <div class="btn-list">
            <div class="progress">
                <span>
                    <span class="point " id="au1au1"></span>
                </span>
            </div>
           <img src="../img/utils/download.png" class="play au1 2" id="2au1"> 
           <img src="../img/utils/download (1).png"  class="pause au1 2" id="au12">
        </div>
    </div>
    
     -->
</main>
<form id="form">
    <i class='bx bx-microphone ' id="start"></i>
    <textarea placeholder="Ecrivez..." name="contenue" id="contenue" required></textarea>
    <button type="submit"><i class='bx bx-send'></i></button>
</form>
    </div>
    <script src="../js/message.js" type="module"></script>
</body>
</html>