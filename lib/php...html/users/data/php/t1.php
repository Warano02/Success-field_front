<?php

include './fctn.php';
/**
 * Inscription of user
 */
function  getId($email)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare('SELECT unique_id FROM users WHERE email=?');
    $req->execute(array($email));
    $id = $req->fetch();
}
if (isset($_POST)) {
    $nom = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $mdp = htmlspecialchars($_POST['password']);
    $niveau = htmlspecialchars($_POST['level']);
    $ndt = htmlspecialchars($_POST['phone']);
    if (inserer($nom, $email, $mdp, $niveau, $ndt)) {
        echo json_encode(array(
            'statut' => 0,
            'msg' => "Inscription réussie",
        ));
        $_SESSION['yetedi'] = true;
        $_SESSION['nom'] = $nom;
        $_SESSION['email'] = $email;
        $_SESSION['niveau'] = $niveau;
        $_SESSION['profil'] = "admin.png";
        $_SESSION['tel'] = $ndt;
    } else {
        echo json_encode(array(
            'statut' => 1,
            'msg' => "Il existe déjà un utilisateur avec l'email que vous avez renseigner"
        ));
    }
}
