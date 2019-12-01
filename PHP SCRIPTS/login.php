<?php
session_start();

$uname_query = filter_var(trim($_POST['uname']), FILTER_SANITIZE_EMAIL, FILTER_VALIDATE_EMAIL);
$pass_query  =  filter_var(trim($_POST['pass']), FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
 $salt= mt_rand();
$passquery=md5($salt."pass");
$host = getenv('IP');
$dbusername = "final_user";
$dbpass = "SQLpass";
$dbname = "schema";
?>

<?php

   
if (isset($uname_query) && isset($pass_query) && !empty($uname_query) && !empty($pass_query) ){
    echo "ISSET ";

    
        try {
            $conn = new PDO("mysql:host=$host;dbname=$dbname",$dbusername, $dbpass);
            $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            $conn->exec("SET NAMES 'utf8'");
            echo "CONNECTION SUCCESSFUL";
           
        } catch (Exception $e) {
            echo "Could not connect to the database.";
            exit;
        }
   
    $stmt = $conn-> query('SELECT * FROM users');
    $results = $stmt-> fetchALL(PDO::FETCH_ASSOC);
    
    // if ($results !== FALSE && $stmt!== FALSE) {
     
       foreach($results as $row){
         /* echo "REACH THUS FAR";*/
           if ($uname_query=== $row['email'] && $pass_query === $row['password']){
                echo "MATCHED";
            
            
        // header('Location: /HTML FILES/dashboard.html');
           }else{
    
                echo "ERROR encountered";
     }
       }
}
    
?>





