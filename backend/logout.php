<?php
header("Access-Control-Allow-Origin: *");
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: *");
session_start();
// deleting cookies
if (isset($_COOKIE['userCookie']) || isset($_COOKIE['PHPSESSID'])) {
    unset($_COOKIE['userCookie']);
    unset($_COOKIE['PHPSESSID']);
    setcookie('PHPSESSID', null, -1, '/');
    setcookie('PHPSESSID', '', -1, '/');
    setcookie('userCookie', null, -1, '/');
    setcookie('userCookie', "", -1, '/');
    $_COOKIE['userCookie']= '';
}

//deleting sessions
session_unset();
// session_destroy();
// redirect('http://localhost:3000/');
echo "fine";

?>
