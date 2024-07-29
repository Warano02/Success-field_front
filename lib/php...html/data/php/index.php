<?php
function get($nom)
{
   require '../../../config/connexion.php';
   $req = $access->prepare('SELECT * FROM epreuve WHERE Matiere=? OR 	epreuve=? OR descrip=? OR 	prof=? ');
   $req->execute(array($nom, $nom, $nom, $nom));
   $data = $req->fetchAll();
   return $data;
}
if (isset($_GET)) {
   $_GET['yo'] == "jbjbjzbjkerjkerjeo" ? $res = get($_GET['nom']) : $res = array("error" => true, "motif" => "vous n'êtes pas autoriser a acceder a ces données");
   echo json_encode($res);
}
