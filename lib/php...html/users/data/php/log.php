<?php
session_start();
function addHis($email, $role, $appareil, $date)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare("INSERT INTO historiquedeconnexion(utilisateur,rôle,appareil,datte) VALUES (?,?,?,?)");
    $req->execute(array($email, $role, $appareil, $date));
    return true;
}



function connexion($email, $mdp)
{
    require '../../../../config/connexion.php';
    $recupe = $access->prepare("SELECT * FROM users WHERE email=?");
    $recupe->execute(array($email));
    $juge = $recupe->fetch();
    if ($recupe->rowCount() == 0) {
        $msg = "Aucun utilisateur avec l'email " . $email;
        $statut = 1;
    } else if (password_verify($mdp, $juge['mdp'])) {
        $appareil = $_SERVER['HTTP_USER_AGENT'];
        $datte = date('l jS \of F Y h:i:s A') . PHP_EOL;
        $role = "user";
        addHis($email, $role, $appareil, $datte);
        $_SESSION['yetedi'] = true;
        $_SESSION['nom'] = $juge['nom'];
        $_SESSION['email'] = $juge['email'];
        $_SESSION['niveau'] = $juge['niveau'];
        $_SESSION['profil'] = $juge['profil'];
        $_SESSION['tel'] = $juge['ndt'];
        $_SESSION['UnId'] = $juge['unique_id'];
        $msg = "Authentification réussis";
        $statut = 0;
    } else {
        $msg = "Mot de passe incorrect !";
        $statut = 1;
    }
    echo json_encode(array(
        "msg" => $msg,
        "statut" => $statut
    ));
}

if (isset($_POST)) {
    $email = htmlspecialchars($_POST['mail']);
    $mdp = htmlspecialchars($_POST['password']);
    connexion($email, $mdp);
}
