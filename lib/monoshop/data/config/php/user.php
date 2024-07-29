<?php
session_start();
function User($id)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare("SELECT nom,email,profil,ndt,unique_id,solde FROM users  ");
    $req->execute();
    $user = $req->fetchAll();
    $req->closeCursor(); //fin de la recup des users
    $req = $access->prepare("SELECT nom,email,profil,ndt,unique_id,solde FROM cadre ");
    $req->execute();
    $user2 = $req->fetchAll();
    $req->closeCursor(); //fin de la recup des cadre
    foreach ($user2 as $item) {
        array_push($user, $item);
    }
    foreach ($user as $us) {
        if ($us['unique_id'] == $id) {
            $result = $us;
        }
    }
    return $result;
}
function Confirm(){
    require '../../../../config/connexion.php';
$req=$access->prepare("UPDATE  users SET confirm = 1 WHERE unique_id= ?");
$req->execute(array($_SESSION['UnId']));

}


if (isset($_GET['GetUser'])) {
    $_GET['GetUser'] == "h558jsjzi774sb" ? $r = User($_SESSION['UnId']) : $r = array("error" => true, "msg" => "Fake request... Missing reel  user");
    echo json_encode($r);
}elseif (isset($_GET['jsshdjdjdj'])) {
    echo json_encode($_SESSION['email']);
}elseif (isset($_GET['cofirmEmail'])) {
    Confirm();
   $_GET['cofirmEmail']="ForWarano"?$r=array("error"=>false,"msg"=>"Votre email a été confirmer avec success!"):$r=array("error"=>true,"msg"=>"Une erreur est survenue lors de la confirmation de votre email. Veuillez reesayer");
echo json_encode($r);
}
