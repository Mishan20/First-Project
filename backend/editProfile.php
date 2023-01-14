<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

include('conn.php');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// var_dump($data);
$fname = $data['fname'];
$lname = $data['lname'];
$nic = $data['nic'];
$email =$data['email'];
$tnum =$data['tnum'];


$sql = "UPDATE login SET fname = '$fname', lname = '$lname', email = '$email', phone =$tnum  WHERE nic = '$nic'";

if ($mysqli->query($sql) == true) {
    echo "Done";
  } else {
    echo "Error: " ;
  }
// echo $sql;

$mysqli->close();

?>