<?php
function fetch()
{
    require '../../../config/connexion.php';
    $warano = $access->prepare("SELECT * FROM epreuve ");
    $warano->execute();
    $subject = $warano->fetchAll(PDO::FETCH_DEFAULT);
    echo json_encode(array_reverse($subject));
}
fetch();
