<?php
session_start();
function test($id)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare("SELECT confirm FROM users  WHERE unique_id=?");
    $req->execute(array($id));
    $data = $req->fetch();
    return $data;
}

if (isset($_GET)) {
    echo json_encode(test($_SESSION['UnId']));
}