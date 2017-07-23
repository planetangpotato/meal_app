<?php
header('Content-Type: application/json');
if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }
header('Access-Control-Allow-Origin: *');
	include('connect.php');
	
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$username = $request ->username;
	$password = $request ->password;
	$a = (string)$username;
	$b = (string)$password;
	$data = array();
	
	$accounts = "SELECT * FROM login WHERE BINARY username = '$a' AND password ='$b'";
	$result = $conn ->query($accounts);
	$row = $result ->fetch_assoc();
	$id = $row['username'];
	if($id != ""){
			array_push($data,$id);
	}else{
		array_push($data, "Account Doesn't exist!");
	}
	echo json_encode($data);
?>