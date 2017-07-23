<?php
header('Access-Control-Allow-Origin: *');

include 'connect.php';
$res = mysqli_query($conn, "SELECT * FROM notif");
while($data=mysqli_fetch_assoc($res)){
	$info[] = $data;
}
echo json_encode($info);
?>