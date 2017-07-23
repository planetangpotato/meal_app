<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php';
$id = $_GET['id'];

mysqli_query($conn,"DELETE FROM notif WHERE id = '$id'");
?>