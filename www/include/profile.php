<?php

// header('Content-Type: application/json');
// if (isset($_SERVER['HTTP_ORIGIN'])) {
//         header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
//         header('Access-Control-Allow-Credentials: true');
//         header('Access-Control-Max-Age: 86400');    // cache for 1 day
//     }

//     // Access-Control headers are received during OPTIONS requests
//     if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

//         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
//             header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

//         if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
//             header("Access-Control-Allow-Headers:{$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

//         exit(0);
//     }
    
	include'connect.php';
        header('Access-Control-Allow-Origin: *');
          $link=explode("/",$_SERVER['PATH_INFO']);
$a =$link[1];
$size=sizeof($link)-1;

        	// $postdata = file_get_contents("php://input");
        	// $request = json_decode($postdata);
        	// $username = $request-> username;
         //    $email = $request -> email;
         //    $home_add = $request -> home_add;
	

	$res = mysqli_query($conn,"SELECT * FROM login WHERE username='$a'");
    while($data = mysqli_fetch_assoc($res)){
        $datas[] = $data;
    }
	
		echo json_encode($datas);
	
?>