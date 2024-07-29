<?php
session_start();
function GetAllUser() //Liste des utilisateur du site
{
    require "../../../config/connexion.php";
    $result = array();
    $req = $access->prepare("SELECT unique_id,profil,statut,nom FROM cadre WHERE unique_id  !=? ORDER BY nom ");
    $req->execute(array($_SESSION['UnId']));
    $data = $req->fetchAll();
    foreach ($data as $user) {
        $now = array(
            "unique_id" => $user['unique_id'],
            "profil" => $user['profil'],
            "statut" => $user['statut'],
            "nom" => $user['nom']
        );
        array_push($result, $now);
    }
    $users = $access->prepare("SELECT unique_id,profil,statut,nom FROM users WHERE unique_id  !=? ORDER BY nom ");
    $users->execute(array($_SESSION['UnId']));
    $data = $users->fetchAll();
    foreach ($data as $user) {
        $now = array(
            "unique_id" => $user['unique_id'],
            "profil" => $user['profil'],
            "statut" => $user['statut'],
            "nom" => $user['nom']
        );
        array_push($result, $now);
    }
    return $result;
}
function T1() //recuperation des messages dans la Bd et traitement
{
    require "../../../config/connexion.php";
    $users = GetAllUser();
    $id = $_SESSION['UnId'];
    $r = array();
    foreach ($users as $user) {
        $id2 = $user['unique_id'];
        $ask = $access->prepare("SELECT * FROM messages WHERE (send_msg_id=? AND received_msg_id=?) OR (received_msg_id=? AND send_msg_id=?) ORDER BY msg_id DESC LIMIT 1 ");
        $ask->execute(array($id, $id2, $id, $id2));
        $donne = $ask->fetch();
        if ($ask->rowCount() > 0) {
            $result = $donne['sms'];
            (strlen($result) > 20) ? $sms = substr($result, 0, 20) . '...' : $sms = $result;
            ($id == $donne['send_msg_id']) ? $you = "Vous : " : $you = "";
            $okay = $you . $sms;
            $resultat = array($user, "msg" => $okay);
            array_push($r, $resultat);
        } else {
            $okay = "Causer avec " . $user['nom'];
            $resultat = array($user, "msg" => $okay);
            array_push($r, $resultat);
        }
        
    }

    return $r;
}


if (isset($_GET)) {
    echo json_encode(T1());
}
