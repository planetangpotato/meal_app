<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php' ;
	$food = $_GET["food"];
	$oras = $_GET["oras"];
	

mysqli_query($conn, "INSERT INTO breakfast (food,oras) VALUES ('$food', '$oras')");
?>	