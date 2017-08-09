<?php
header('Access-Control-Allow-Origin: *');
include 'connect.php' ;
date_default_timezone_set('Asia/Manila');

$res = mysqli_query($conn,"SELECT count() as me FROM notif");
while($data = mysqli_fetch_assoc($res)){
	$i[] = $data;
}
echo json_encode($i);
?>	