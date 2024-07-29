<?php 
function gOU($uniqId)
{
    require '../../../config/connexion.php';
    $req = $access->prepare("SELECT * FROM users WHERE unique_Id=?");
    $req->execute(array($uniqId));
    if ($req->rowCount() === 0) {
        $teta = $access->prepare("SELECT * FROM cadre WHERE unique_Id=?");
        $teta->execute(array($uniqId));
        if ($teta->rowCount() === 0) {
            return false;
        } else {
            $donne = $teta->fetchAll();
            return json_encode($donne);
        }
    } else {
        $donne = $req->fetchAll();
        return json_encode($donne);
    }
}
if (isset($_POST)) {
   $req=htmlspecialchars($_POST['id']);
   echo json_encode(gOU($req));
}