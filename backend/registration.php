<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");

include('conn.php');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// var_dump($data);
$index = $data['index'];
$fname = $data['fname'];
$lname = $data['lname'];
$nic = $data['nic'];
$email =$data['email'];
$role = $data['role'];
$tnum =$data['tnum'];
$password = $data['password'];

$sql = "INSERT INTO login (role, nic, password, fname, lname, email, phone, studentid) VALUES ('$role','$nic','$password','$fname','$lname','$email',$tnum,'$index')";


if ($mysqli->query($sql) == true) {
    echo "Done";
  } else {
    echo "Error: " ;
  }
// echo $sql;

$mysqli->close();

?>