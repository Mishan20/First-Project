<?php
session_start();

echo $_SESSION['Role'] . " ".$_SESSION['Nic'];
echo "Cookie is - " . $_COOKIE['userCookie'];

?>