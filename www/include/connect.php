<?php
	
	$servername = "localhost";
	$username = "root";
	$password = "password";
	
	$conn = mysqli_connect('localhost','root','','mobile_app');
	
	if(!$conn){
		die("connection failed:".mysqli_connect_error());
	}
?>