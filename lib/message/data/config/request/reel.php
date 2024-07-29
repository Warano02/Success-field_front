<?php

/**
 *  $id= il s'agit de l'identifiant de l'utilisateur en cours d'utilisation
 *  $id2= l'id de la personne avec qui l'utilisateur connecter souhaite causer
 * 
 *   La fonction :  Elle renvoie un tableaux d'objet afin qu'il soit facile a utiliser dans le front.  
 *   Chaque objet represente le message envoyer et est constituer de msg et send. si send==1  alors c'est 
 *   l'utilisateur connecter qui as envoyer le messages sinon 0.
 */
function sms($id, $id2)
{
    $result = array();
    require '../../../../config/connexion.php';
    $ask = $access->prepare("SELECT send_msg_id,received_msg_id,sms FROM messages WHERE (send_msg_id=? AND received_msg_id=?) OR (received_msg_id=? AND send_msg_id=?) ");
    $ask->execute(array($id, $id2,$id, $id2));
    $data = $ask->fetchAll();
    foreach ($data as $msg) {
        if ($msg['send_msg_id'] == $id) {
            array_push($result, array(
                "msg" => $msg['sms'],
                "send" => 1
            ));
        } else {
            array_push($result, array(
                "msg" => $msg['sms'],
                "send" => 0
            ));
        }
    }
    return $result;
    
}
if ($_GET) {
    if (!empty($_GET['user']) && !empty($_GET['id'])) {
        echo json_encode(sms($_GET['user'], $_GET['id']));
    } else {
        echo json_encode(array(
            "error" => 1,
            "msg" => "Veuillez preciser touts les champs demander"
        ));
    }
}
