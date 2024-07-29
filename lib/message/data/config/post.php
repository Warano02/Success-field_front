<?php

function AddMessage($par, $pour, $mess)
{
    require '../../../config/connexion.php';
    $req = $access->prepare("INSERT INTO messages(send_msg_id,received_msg_id,sms) VALUES(?,?,?)");
    $req->execute(array($par, $pour, $mess));
    $req->closeCursor();
}
