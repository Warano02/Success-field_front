<?php
session_start();
include '../../../config/fonction.php';
if (isset($_SESSION['yetedi'])) {
    header('location:../');
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnuYzdG3b74eVcObVns7v0jmdEPUXL6Ns85A&s" />
  <link rel="stylesheet" href="../data/css/aLogin.css" />
  <title>CONNEXION</title>
</head>

<body>
  <main>
    <form id="connexion" method="post">
     
      <h3>CONNEXION <i class="fa-sharp fa-solid fa-right-to-bracket"></i></h3>
      <input type="text" id="infos" placeholder="Votre addresse e-mail" name="email" required />
      <input type="password" id="pwr" placeholder="Mot de passe" name="mdp" required /><img src="../data/img/cacher.jpg" id="imo" class="cacher" />
      <script>
        
        let connexion = document.getElementById("connexion");
        connexion.addEventListener("submit", (e) => {
          setTimeout(200)
          o
        });

        let voir = document.getElementById("imo");

        voir.onpointerover = () => {
          voir.src = "../data/img/voir.jpg";
          pwr.setAttribute("type", "test");
        };
        voir.onpointerleave = () => {
          voir.src = "../data/img/cacher.jpg";
          pwr.setAttribute("type", "password");
        };
      </script>
      <button type="submit" name="connecter">Se connecter</button>
      <a href="signIn.php">Vous n'avez pas de compte?</a>
    </form>
  </main>
</body>
<?php
if (isset($_POST['connecter'])) {
  if (
    !empty(isset($_POST['email'])) &&
    !empty(isset($_POST['mdp']))
  ) {
    $mdp = htmlspecialchars($_POST['mdp']);
    $email = htmlspecialchars($_POST['email']);
    $test = getAdmin($email, $mdp);
    if ($test) {
      $_SESSION['yetedi'] = true;
      $yesuis = recupeAdmin($email);
      foreach ($yesuis as $item) {
        $_SESSION["nom"] = $item['Nom'];
        $_SESSION["email"] = $item['email'];
        $_SESSION["id"] = $item['id'];
        $_SESSION["ville"]=$item['Ville'];
        $_SESSION['profil']=$item['profil'];
        $_SESSION['tel']=$item['ndt'];
        
      }
      $_SESSION["isAmin"]=true; 
      $utilisateur = $_SESSION['email'];
      $role = 'ADMIN';
      $appareil = $_SERVER['HTTP_USER_AGENT'];
      $datte = date('l jS \of F Y h:i:s A') . PHP_EOL;
      addhistorique($utilisateur, $role, $appareil, $datte);
      $nom = 'Bienvenue' . $_SESSION['nom'] . '😍! ' . '<br/> Souhaiter vous enregister votre compte sur cette appareil? ';
      echo "<script>promt ('$nom')</script>";
      header('location:../../../wait/wait2.php');
    } else {
      $yetenmerde = 'Mot de passe ou email incorect';
      echo "<script>alert ('$yetenmerde')</script>";
    }
  }
}
?>

</html>