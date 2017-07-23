
<?php
header('Access-Control-Allow-Origin: *');
include 'connection.php';
echo $notif_time = $_GET["notif_time"];
echo $id = $_GET["id"];
echo $title = $_GET["title"];
echo $food = $_GET["food"];


mysqli_query($conn,"Update comments SET notif_time ='$notif_time', id= '$id' , food = '$food' where id = '$id'");
?>