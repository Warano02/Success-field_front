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
    <title>Causerie</title>
    <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQpXw5Le53OKaBFqhr96C1F39EN3G1mTMXw&s">
</head>

<body>
</body>
<div class="wrapper">
    <section class="msg-area">
        <header>
            <a href="./" class="back-icon"><i class='bx bx-arrow-back'></i></a>
            <img src="../../../api/app/data/admin-pp/admin.png" id="profil" alt="profil">
            <div class="details">
                <span id="nom">Warano Tenor</span>
                <p>Online</p>
            </div>
        </header>
        <div class="msg-box" id="discussion">
            
        </div>
        <form action="#" class="typing-area" id="form">
            <input type="text" name="send_msg_id" value="<?= $_SESSION['UnId'] ?>" hidden>
            <input type="text" name="received_msg_id" value="<?= $_GET['user'] ?>" id="id" hidden>
            <input type="text" name="msg" minlength="4" class="input" id="msg" placeholder="Ecrivez ici :) ..." required>
            <button type="submit"><i class='bx bxs-send'></i></button>
        </form>
    </section>
</div>
<script src="../js/meco.js"></script>
</body>

</html>