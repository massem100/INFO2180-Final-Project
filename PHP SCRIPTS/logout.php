<?php 
session_destroy();
require "login.php";
 
 session_unset();
// destroy session, it will remove ALL session settings
session_destroy();
  
//redirect to login page
echo "<h2>You have logged out</h2>";
header("Refresh:0; url:/HTML FILES/login.html");


?>