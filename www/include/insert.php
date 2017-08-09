<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php' ;
	$food = $_GET["food"];
	$oras = $_GET["oras"];$title = $_GET["title"];
	

mysqli_query($conn, "INSERT INTO breakfast (food,oras,title) VALUES ('$food', '$oras','$title')");
?>	