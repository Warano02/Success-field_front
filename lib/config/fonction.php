<?php
//les deux fonsctions suivante permetent de tester si l'utilisateur est deja enregistrer dans la base de donnee
function testEtudiant($email)
{
    require("connexion.php");

    $req = $access->prepare("SELECT * FROM users WHERE email=? ");
    $req->execute(array($email));
    if ($req->rowCount() !== 0) {
        return true;
    } else {
        return false;
    }
    $req->closeCursor();
}

function testcadre($email)
{
    require("connexion.php");

    $req = $access->prepare("SELECT * FROM cadre WHERE email=? ");
    $req->execute(array($email));
    if ($req->rowCount() !== 0) {
        return true;
    } else {
        return false;
    }
    $req->closeCursor();
}

//fonction qui va permettre a ajouter les etudiants dans la bases de donnee
function etudiant($nom, $email, $ndt, $mdp, $niveau, $ecole, $solde)
{
    require("connexion.php");
    $date = date('m:d:Y');
    $mdpp = password_hash($mdp, PASSWORD_DEFAULT);
    $joy = $access->prepare("INSERT INTO users(nom,email,ndt,mdp,niveau,ecole,inscritle,solde) VALUES (:nom,:email,:ndt,:mdp,:niveau,:ecole,:inscritle,:solde) ");
    if (!testEtudiant($email)) {
        $joy->execute(array(
            "nom" => $nom, "email" => $email, "ndt" => $ndt, "mdp" => $mdpp, "niveau" => $niveau, "ecole" => $ecole, "inscritle" => $date,  "solde" => $solde
        ));
        $joy->closeCursor();
        return true;
    } else {
        return false;
    }
}
//fonction qui va permettre a ajouter potentiel enseignant ou encore des personnes qui vont deposer des epreuve dans la bases de donnee
function cadre($Nom, $matiere, $mdp, $email, $ndt, $Ville)
{
    require("connexion.php");
    $time = time();
    $unik_id = rand($time, 100000000);
    $statut = "Online";
    $mdpp = password_hash($mdp, PASSWORD_DEFAULT);
    $joy = $access->prepare("INSERT INTO cadre(nom,matiere,mdp,email,ndt,Ville,unique_id,statut) VALUES (:Nom,:matiere,:mdp,:email,:ndt,:Ville,:unique_id,:statut) ");

    if (!testcadre($email)) {
        $joy->execute(array(
            "Nom" => $Nom, "matiere" => $matiere, "mdp" => $mdpp, "email" => $email, "ndt" => $ndt, "Ville" => $Ville,"unique_id"=>$unik_id,"statut"=>$statut
        ));
        return true;
        $joy->closeCursor();
    } else {
        return false;
    }
}

function recupeAdmin($email)
{
    require("connexion.php");
    $req = $access->prepare("SELECT * FROM cadre WHERE email=? ");
    $req->execute(array($email));
    $data = $req->fetchAll();
    return $data;
    $req->closeCursor();
}

//this part of code, i get  a information of admin or user to use it

function getEtudiant($email)
{
    require("connexion.php");
    $req = $access->prepare("SELECT * FROM users WHERE email=? ");
    $req->execute(array($email));
    if (testEtudiant($email)) {
        $data = $req->fetchAll(PDO::FETCH_OBJ);
        return $data;
        $req->closeCursor();
    }
}

function getAdmin($email, $mdp)
{
    if (require("connexion.php")) {
        $req = $access->prepare("SELECT * FROM cadre WHERE email=? ");
        $req->execute(array($email));

        if ($req->rowCount() !== 0) {
            $data = $req->fetch();
            if (password_verify($mdp, $data['mdp'])) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    }
}

function addhistorique($utilisateur, $role, $appareil, $datte)
{
    require("connexion.php");
    $joy = $access->prepare("INSERT INTO historiquedeconnexion(utilisateur,rôle,appareil,datte) VALUES (?,?,?,?) ");
    $joy->execute(array(
        $utilisateur, $role, $appareil, $datte
    ));
    $joy->closeCursor();
}
