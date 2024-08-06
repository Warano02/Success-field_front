<?php
function addmessage($statut, $heure, $de, $a,$msg)
{
    require '../connexion.php';
    $req = $access->prepare('INSERT INTO message(statut,heure,de,a,msg) VALUES(?,?,?,?,?)');
    $req->execute(array($statut, $heure, $de, $a,$msg));
    $req->closeCursor();
    
}
function getmessage($de, $a)
{
    require '../connexion.php';
    $req = $access->prepare('SELECT heure,msg FROM message WHERE de=? AND a=?');
    $req->execute(array($de,$a));
    $data=$req->fetch();
    return $data;
    $req->closeCursor(); 
}
$mot=getmessage('$de','$a');
$txt=json_encode($mot);
echo $txt;