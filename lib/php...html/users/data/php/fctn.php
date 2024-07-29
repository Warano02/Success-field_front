<?php
session_start();
function testPresence($email)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare('SELECT * FROM users WHERE email = :email');
    $req->execute(array('email' => $email));
    if ($req->rowCount() !== 0) {
        return true;
    } else {
        return false;
    }
}

function inserer($nom, $email, $mdp, $niveau, $ndt)
{
    require '../../../../config/connexion.php';
    if (!testPresence($email)) {
        $time = time();
        $unik_id = rand($time, 100000000);
        $statut = "Online";
        $_SESSION['UnId']=$unik_id;
        $mddp = password_hash($mdp, PASSWORD_DEFAULT);
        $req = $access->prepare('INSERT INTO users(nom,email,ndt,mdp,niveau,unique_id,statut) VALUES(?,?,?,?,?,?,?)');
        $req->execute(array($nom, $email, $ndt, $mddp, $niveau, $unik_id, $statut));
        return true;
    } else {
        return false;
    }
}


