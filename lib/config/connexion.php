<?php 
$conn = mysqli_connect("localhost", "root", "", "proet");

try {
    $access=new pdo("mysql:host=localhost;dbname=proet;charset=utf8","root","");

    $access ->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_WARNING);
    
} catch (Exception $e)
 {
 $e->getMessage();
}
?>