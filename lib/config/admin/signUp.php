<?php
include("../fonction.php");
/************************************************************************
 **        RECUPERATION ET INSERTION DU NOUVELLE ADMIN                  **
 **                                                                     **
 *************************************************************************/
$userIndata = $_COOKIE['userIndata'];

if ($userIndata) {
    $userData = json_decode($userIndata);

    $nom = $userData[0];
    $matiere = $userData[1];
    $Ville = $userData[2];
    $ndt = $userData[3];
    $email = $userData[4];
    $mdp = $userData[5];

    $insert = cadre($nom, $matiere, $mdp, $email, $ndt, $Ville);
    if ($insert) {
/* 00000000000000000000000000000000000000000000000000000000
00                                                       00
00 INSERTIONS DE L'ADMIN ET MISE EN PLACE DE LA SESSION  00
00                                                       00
00000000000000000000000000000000000000000000000000000000000
*/
        $Warano = 'Vous avez ete enregistrer avec succes ';
        session_start();
        $_SESSION['yetedi'] = true;
        $_SESSION["ville"] = $Ville;
        $yesuis = recupeAdmin($email);
        foreach ($yesuis as $item) {
            $_SESSION["nom"] = $item['nom'];
            $_SESSION["email"] = $item['email'];
            $_SESSION["id"] = $item['id'];
            $_SESSION['profil']=$item['profil'];
            $_SESSION['tel']=$item['ndt'];
            $_SESSION["isAmin"]=true; 
           
            /**+++++++++++++++++++++++++++++++++++++++++++++++++++++++
             *                                                     +++
             *        INFORMATIONS DANS LA SESSION:                +++
             *  "nom"=> Nom de l'admin connecter                   +++
             * "email" => Email de l'admin connecter               +++
             * "Ville"=> Lieu de résidense de l'admin. cela        +++
             *                          correspond                 +++
             *           egalement a la ville de l'universiter     +++
             * "id"=> Identifiant de l'administrateur en cours     +++
             *                                                     + +
             +++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
        }

        $utilisateur = $_SESSION['email'];
        $role = 'ADMIN';
        $appareil = $_SERVER['HTTP_USER_AGENT'];
        $datte = date('l jS \of F Y h:i:s A') . PHP_EOL;
        addhistorique($utilisateur, $role, $appareil, $datte);


        setcookie('userIndata');
        header('location:../../wait/wait0.php');
    } else {
        $yetenmerde = 'L\' email  ' . $email . ' que vous avez entrer correspond a celui d\'un autre utilisateur';
        $_SESSION["yetenmerde"] = $yetenmerde;

        header('location:../../php...html/admin/pages/signIn.php');
    }
}
