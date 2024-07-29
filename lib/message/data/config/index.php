<?php
session_start();
$Unique=$_SESSION['UnId'];
echo json_encode($Unique);