<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php';
$res = mysqli_query($conn, "SELECT * FROM breakfast");
while($data=mysqli_fetch_assoc($res)){
	$info[] = $data;
}

?>