<?php
session_start();
if (!isset($_SESSION['yetedi'])|| !isset($_SESSION["isAmin"])) {
    header('location:logIn.php');
}
/*
cette page est la pages où les admin vont pouvoir deposer les epreuves pour que les autres puisses telecharger plus tard
*/
?>



<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AJOUT D'EPREUVE</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>

<body class="bg-black text-white">

    <nav class="navbar navbar-expand-lg bg-dark ">
        <div class="container-fluid">
            <a class="navbar-brand text-info" href="../../index.php">Success-field</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active text-white" aria-current="page" href="#" style="font-weight:bold">Deposer une nouvelle epreuve</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white " href="./profil.php" style="font-weight:bold">Profil</a>
                    </li>
                </ul>
                <div style="display: flex;justify-content:flex-end;">
                    <a href="../index.php" class="btn btn-warning">Page D'acceuil</a>
                </div>
            </div>
        </div>
    </nav>


    <div class="container align-self-center row">
        <div>
            <form method="post" class="col mt-5 pt-5 m-3" enctype="multipart/form-data">

                <label for="file" class="form-label">Veuillez choisir le Document</label>
                <input type="file" accept=".doc,.docx,.pdf" name="epreuve" id="file" class="form-control w-50 rounded-pill text-black bg-info" required>

                <div class="mb-3">
                    <label for="nom" class="form-label">Ajouter un Nom</label>
                    <input type="nom" id="nom" name="titre" class="form-control w-50 rounded-pill text-black bg-info" placeholder="Nom de l'epreuve" required>
                </div>
                <div class="mb-3">
                    <label for="matiere" class="form-label">Svp <?= $_SESSION['nom'] ?> Preciser la matiere : </label>
                    <input type="nom" id="matiere" name="matiere" class="form-control w-50 rounded-pill text-black bg-info" placeholder="Nom de la matiere" required>
                </div>
                <div class="mb-3">
                    <label for="matiere" class="form-label">Svp <?= $_SESSION['nom'] ?> Preciser le niveau: </label>
                    <input type="nom" id="niveau" name="niveau" class="form-control w-50 rounded-pill text-black bg-info" placeholder="Niveau/classe. EXP: L1IN" required>
                </div>

                <div class="mb-3">
                    <label for="desc" class="form-label">Description</label>
                    <textarea class="form-control w-50" id="desc" name="desc" maxlength="255" required></textarea>
                </div>
                <button type="submit" class="btn btn-success" name="envoiyer">Envoyer</button>
            </form>
        </div>

        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 col" style="left: 30%;position:absolute;">
            <div></div>
            <br>
            <div>
                <h2 class="mb-3">Aperçu...</h2>
                <div class="card shadow-sm mb-5">
                    <div class="card-header py-3">
                        <h4 class="my-0 fw-normal" id="title">C'est le nom qui seras mentioner dans votre historique </h4>
                    </div>
                    <img src="../../data/img/pdf.jpg" alt="image de pdf" class="bd-placeholder-img card-img-top" width="100%" height="225">
                    <div class="card-body">
                        <p class="card-text" id="descri">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis.
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Par:</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary"><?= $_SESSION['nom'] ?></button>

                            </div>
                            <small class="text-body-secondary"><?php echo date('d/m/Y'); ?></small>
                        </div>
                    </div>
                    <button type="button" class="w-100 btn btn-lg btn-primary">TELECHARGER</button>
                </div>
            </div>
        </div>

    </div>


    <script src="../data/js/e225hd.js"></script>

</body>

</html>

<?php
function depot($Matiere, $Annee, $prof, $epreuve, $titre, $prix, $descrip, $niveau, $ville)
{
    require '../../../config/connexion.php';
    $req = $access->prepare('INSERT INTO epreuve(Matiere,Annee,prof,epreuve,titre,prix,descrip,niveau,ville) VALUES (?,?,?,?,?,?,?,?,?)');
    $req->execute(array($Matiere, $Annee, $prof, $epreuve, $titre, $prix, $descrip, $niveau, $ville));
    $req->closeCursor();
}
// depot("Matiere", "Annee", "pro", "epreuve", "titre"," prix"," descrip"," niveau"," ville");
if (isset($_POST['envoiyer'])) {

    
    if (
        !empty(isset($_POST['titre'])) &&
        !empty(isset($_POST['matiere'])) &&
        !empty(isset($_POST['desc'])) &&
        $_FILES['epreuve'] &&
        !empty($_SESSION['ville']) &&
        !empty($_SESSION['nom'])&&
        !empty(isset($_POST['niveau']))
    ) {
        $titre = htmlspecialchars($_POST['titre']);
        $niveau = htmlspecialchars($_POST['niveau']);
        $Matiere = htmlspecialchars($_POST['matiere']);
        $descrip = htmlspecialchars($_POST['desc']);
        $prof = $_SESSION['nom'];
        
        $date = date('d/m/Y');
        $prix = 2;
        $name_file = $_FILES['epreuve']['name'];
        $dossier_provisoire = $_FILES['epreuve']['tmp_name'];
        $ville = $_SESSION['ville'];

        /*
POUR RECUPRERER L'EPREUVE, IL FAUDRAS SIMPLEMENT REMPLACER  '../../nodemodule/epreuve/' PAR LE CHEMIN 
QUI MENE VERS LE DOSSIER epreuve dans nodemodule ET CONCATENER LE RESTE PAR LE CHEMIN DE LA BD
*/

        $position = '../../../api/app/data/success-subject/' . $Matiere . $_SESSION['id'] . $name_file;
        $epreuve = $Matiere . $_SESSION['id'] . $name_file;
        move_uploaded_file($dossier_provisoire, $position);
        depot($Matiere, $date, $prof, $epreuve, $titre, $prix, $descrip, $niveau, $ville);
        echo "<script>alert ('Deposer avec success...') </script>";
        echo "<script>window.location.href='../'</script>";
    } else {
        echo "<script>alert ('Veuillez mentioner tous les champs') </script>";
    }
}

?>