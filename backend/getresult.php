<?php
include('conn.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include('conn.php');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$studentid = $data['studentid'];


$sql = "SELECT * FROM result WHERE index_no ='$studentid'";
$result = $mysqli->query($sql);

if(mysqli_num_rows($result)){
    // $x = $result->fetch_all();
    $x = mysqli_fetch_all($result, MYSQLI_ASSOC);
    echo json_encode($x);
}else{
    echo "Invalid username password";
}

$mysqli -> close();




?>