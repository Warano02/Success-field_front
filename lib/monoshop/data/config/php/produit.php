<?php
session_start();
function User()
{
    require '../../../../config/connexion.php';
    $req = $access->prepare("SELECT nom,email,profil,ndt,unique_id FROM users  ");
    $req->execute();
    $user = $req->fetchAll();
    $req->closeCursor(); //fin de la recup des users
    $req = $access->prepare("SELECT nom,email,profil,ndt,unique_id FROM cadre ");
    $req->execute();
    $user2 = $req->fetchAll();
    $req->closeCursor(); //fin de la recup des cadre
    foreach ($user2 as $item) {
        array_push($user, $item);
    }
    return $user;
}
function Get($id)
{
    $Users = User();
    foreach ($Users as $user) {
        if ($user['unique_id'] == $id) {
            $result = $user;
        }
    }
    return $result;
}

function Produit()
{
    require '../../../../config/connexion.php';
    $produit = array();
    $req = $access->prepare("SELECT * FROM produit ORDER BY id DESC");
    $req->execute();
    $data = $req->fetchAll();
    $req->closeCursor(); //fin de la recupreration des produits brutes
    foreach ($data as $item) {
        $par = Get($item['par']);
        array_pop($item);
        array_push($item, $par);
        array_push($produit, $item);
    }
    return $produit;
}

function Proprio($id)
{
    require '../../../../config/connexion.php';
    $result = array();
    $req = $access->prepare("SELECT * FROM produit WHERE par=? ORDER BY id DESC ");
    $req->execute(array($id));
    $data = $req->fetchAll();
    foreach ($data as $item) {
        array_push($result, array("id" => $item['id'], "nom" => $item['nom'], "prix" => $item['prix'], "description" => $item['description'], "src" => $item['image']));
    }
    return $result;
}

function jeveux($id)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare('SELECT * FROM produit WHERE id=?');
    $req->execute(array($id));
    $data = $req->fetch();
    return $data;
}
function del($id)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare('DELETE FROM produit WHERE id = ?');
    $req->execute(array($id));
}
function Ajout($nom, $desc, $prix, $src, $proprio)
{
    require '../../../../config/connexion.php';
    $req = $access->prepare("INSERT INTO produit(image,description,nom,prix,par) VALUES(?,?,?,?,?)");
    $prix /= 650;
    $req->execute(array($src, $desc, $nom, $prix, $proprio));
    $req->closeCursor();
    return true;
}

if (isset($_POST['nom'])) {
    $nom = htmlspecialchars($_POST['nom']);
    $desc = htmlspecialchars($_POST["description"]);
    $prix = htmlspecialchars($_POST['prix']);
    $src = htmlspecialchars($_POST["image"]);
    $proprio = htmlspecialchars($_POST['par']);
    Ajout($nom, $desc, $prix, $src, $proprio) ? $result = array("error" => false, "msg" => "Votre produit a été ajouter avec succès") : $result = array("error" => true, "msg" => "Une erreur est survenue lors de la mise sur pied de votre produit sur le marché. Réesayez !");
    echo json_encode($result);
}

if (!empty(isset($_GET['produit']))) {
    $_GET['produit'] == "All.min" ? $result = Produit() : $result = array("erreur" => true, "motif" => "vous n'avez pas mentioner l'atribut");
    echo json_encode($result);
} elseif (!empty(isset($_GET['propriete']))) {
    $_GET['propriete'] == "Pour_warano" ? $result = Proprio($_SESSION['UnId']) : $result = array("erreur" => true, "motif" => "Vous n'êtes pas éligible a ces données");
    echo json_encode($result);
} elseif (!empty(isset($_GET['jeveux']))) {
    echo json_encode(jeveux($_GET['jeveux']));
}

if (!empty(isset($_GET['delete'])) && !empty(isset($_GET['id']))) {
    del($_GET['id']);
    echo json_encode("Votre produit a bien été supprimer");
}
    # code...
