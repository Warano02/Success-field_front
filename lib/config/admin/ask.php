<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        let ask=confirm('souhaitez vous ajouter un profil?');
        if (ask) {
            alert('OK et continuez');
            window.location.href='../../php...html/admin/pages/addpp.php';
        } else {
            window.location.href='../../php...html/admin/index.php'; 
        }
    </script>
</body>
</html>