<?php


$host = "localhost";
$dbusername = "final_user";
$dbpass = "SQLpass";
$dbname = "schema";
?>
 <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
               
    <script src="/app.js" type="text/javascript"></script>
<?php
$_POST['issue_form'];
        $fname= filter_var(trim($_POST['FirstName']), FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
        $lname= filter_var(trim($_POST['LastName']), FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
        $pass= $_POST['Password'];                
        $email= filter_var(trim($_POST['Email']), FILTER_SANITIZE_EMAIL, FILTER_VALIDATE_EMAIL);

   header("Location: /HTML FILES/createissue.html");
   
        try {
            $conn = new PDO("mysql: host=$host; dbname=$dbname;", $dbusername, $dbpass);
            $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
           
              
                $sql = "INSERT INTO users (first_name, last_name,password,email)
                VALUES ($fname, $lname, $pass,$email)";
        
                $conn->exec($sql);
        
          
        }
        catch(PDOException $e){
            {
            echo $sql . "<br>" . $e->getMessage();
            }
        
        $conn = null;
        }



?>
 