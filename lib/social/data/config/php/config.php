<?php
function getUser($UnId){
require "../../../../config/connexion.php";
$req= $access->prepare("SELECT nom,profil FROM users WHERE unique_id=?");
$req->execute(array($UnId));
$data=$req->fetchAll();
return $data;
}
function Users(){
    require "../../../../config/connexion.php";
    $req= $access->prepare("SELECT nom,profil,unique_id FROM users WHERE statut='Online' ORDER BY nom ");
    $req->execute();
    $data=$req->fetchAll();
    return $data; 
}
if(isset($_GET["id"]) && isset($_GET["moi"])){
    $r=$_GET["moi"]=="warano200"?array("error"=>false,"data"=>getUser($_GET['id'])):array("error"=>true,"msg"=>"Mola tu n'es pas autorisé à acceder à ces donnee.");
    echo json_encode($r);
}else if (isset($_GET["users"])) {
    echo json_encode(Users());
}
