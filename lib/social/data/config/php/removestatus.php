<?php
function Dele_status($src){
    $path="../../img/statut/img/".$src;
    if (file_exists($path)) {
        unlink($path);
        return true;
    } else {
      return false;
    }  
}

if (isset($_GET["src"])) {
    $r=Dele_status($src)?("Image suprimer avec success"):("Image inhexistante");
    echo $r;
}