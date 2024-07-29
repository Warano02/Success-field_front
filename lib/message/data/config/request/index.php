<?php

function addMessage($send, $recive, $sms)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare('INSERT INTO messages(send_msg_id,received_msg_id,sms) VALUES (?,?,?) ');
    $req->execute(array($send, $recive, $sms));
    $req->closeCursor();
}
if ($_POST) {
    if (!empty(isset($_POST['send_msg_id'])) && !empty(isset($_POST['received_msg_id']))  && !empty(isset($_POST['msg']))) {
        addMessage(htmlspecialchars($_POST['send_msg_id']), htmlspecialchars($_POST['received_msg_id']), htmlspecialchars($_POST['msg']));
        echo json_encode(array('error' => 0, 'msg' => "Ok.."));
    } else {
        echo json_encode(array('error' => 1, 'msg' => "Veuillez preciser toutes les entrer"));
    }
}
