<?php
session_start();
function getMessage($id) //Tout les messages où sont mentionner l'utilisateur en cours
{
    require "../../../config/connexion.php";
    $req = $access->prepare("SELECT send_msg_id,received_msg_id,sms FROM  messages WHERE send_msg_id=?  OR received_msg_id=?");
    $req->execute(array($id, $id));
    $data = $req->fetchAll();
    $result = array();
    foreach ($data as $meco) {
        $now = array(
            "par" => $meco['send_msg_id'],
            "pour" => $meco['received_msg_id'],
            "message" => $meco['sms']
        );
        array_push($result, $now);
    }
    return $result;
}


function getUser($id) //recupere les donnee d'un utilisateur a travers son id
{
    $result = array();
    $users = GetAllUser();
    foreach ($users as $user) {
        if ($user["unique_id"] == $id) {
            $result = $user;
        }
    }
    return $result;
}


function Message($id) //Renvoie les messages et l'es details sur celuis qui les as envoyers
{
    $result = array();
    $messages = getMessage($id);
    foreach ($messages as $message) {
        $Infos = getUser($message['send_msg_id']);
        $now = array(
            "sms" => $message['sms'],
            "infos" => $Infos
        );
        array_push($result, $now);
    }
    return $result;
}
if (isset($_GET)) {
    echo json_encode(Message($_SESSION['UnId']));
}
