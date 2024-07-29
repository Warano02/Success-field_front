<?php
session_start();
if (!isset($_SESSION['yetedi'])) {
    header('location:../php...html/users/login/?href=message');
}
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./data/css/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bienvenue</title>
    <link rel="icon" href="./data/img/1.jpg">
</head>
<body>
    <h1>Nous chargeons vos messages</h1>
    <script src="./data/js/script.js"></script>
</body>
</html>