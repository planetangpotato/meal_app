<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php' ;
date_default_timezone_set('Asia/Manila');
$time = date("H:i");
echo $time;

$res = mysqli_query($conn,"SELECT * FROM breakfast where oras='$time'");
while($data = mysqli_fetch_assoc($res)){
	$a = $data['food']; $id = $data['id']; 
	$b = $data['oras'];
	$c = $data['title'];
mysqli_query($conn,"INSERT into notif (	notif_time,title,food) VALUES ('$b','$c','$a')");
mysqli_query($conn,"DELETE FROM breakfast where oras='$time'");
}
?>	