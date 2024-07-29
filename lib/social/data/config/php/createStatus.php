<?php

if (isset($_FILES['fichier'])) {
$source=$_FILES["fichier"]["name"];
$path="../../img/statut/img".$souce;
if (rename($souce,$path)) {
    echo json_encode(array("error"=>false,"msg"=>"statut mis a jours avec success"));
} else {
    echo json_encode(array("error"=>true,"msg"=>"Une erreur est survenue lors de la mise a jours de votre  statut"));
}
}