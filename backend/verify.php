<?php
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");
include('conn.php');

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$role = $data['role'];
$nic = $data['nic'];
$password = $data['password'];

$sql = "SELECT * FROM login WHERE nic='$nic' AND role='$role' AND password='$password'";
$result = $mysqli->query($sql);

if (mysqli_num_rows($result)) {
    $x = $result->fetch_assoc();
    //set cookie
    $cookie = $x['nic'];
    setcookie('userCookie', $cookie, time() + (3600), "/"); //1 day
    $_COOKIE['userCookie'] = $x['nic'];
    // set sessions
    session_start();
    $_SESSION["Role"] = $x['role'];
    $_SESSION["Nic"] = $x['nic'];
    $_SESSION["Fname"] = $x['fname'];
    $_SESSION["Stuid"] = $x['studentid'];
    echo json_encode($x);
} else {
    echo "Invalid username password";
}



$mysqli->close();
