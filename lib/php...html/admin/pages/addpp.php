<?php
session_start();
if (!isset($_SESSION['yetedi'])|| !isset($_SESSION["isAmin"])) {
  header('location:logIn.php');
}

if (isset($_POST['enregistrer']) and isset($_FILES['fichier'])) {
  require '../../../config/connexion.php';
  $id = $_SESSION['id'];
  $name_file = $_FILES['fichier']['name'];
  $dossier_provisoire = $_FILES['fichier']['tmp_name'];
  $image = '../../../api/app/data/admin-pp/admin' . $id . $name_file;
  move_uploaded_file($dossier_provisoire, $image); // on vient d'envoyer le fichier dans notre dossier creer 
  // Maintenant chargeons les infos du ficher dans la bd

  $req = $access->prepare("UPDATE `cadre` SET `profil` = '$name_file' WHERE `cadre`.`id` = $id");
  $req->execute();
  header('location:../');
}
?>
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Ajouter un profil</title>
  <link rel="stylesheet" href="../data/css/aaddpp.css" />
  <link rel="icon" href="/img/profil.png">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
  <div class="hero">

    <div class="card" style="position: relative;">
      <img src="../data/img/window-close.svg" id="close" alt="to get back" style="width: 30px;height:30px;position:absolute;top:0px;right:10px;border: radius 0px;cursor:pointer;color:black">

      <!-- nom de l'utilisateur et adresse email a mettre ici -->

      <p id="username"><?php echo $_SESSION['nom'] . '<br/>';
                        echo $_SESSION['email'] . '<br>'; ?></p>
      <img src="../data/img/profil.png" alt="profil" id="profile-pic" />
      <form action="" enctype="multipart/form-data" method="post">
        <input type="file" name="fichier" accept="image/jpg,image/png,image/jpeg" id="input-file" />
        <label for="input-file">Ajouter une photo de profil</label>
        <button id="save" type="submit" name="enregistrer">Enregistrer</button>
      </form>
    </div>
  </div>
  <script src="../data/js/aaddpp.js"></script>
</body>

</html>