<?php
        $host = "localhost";
        $dbusername = "final_user";
        $dbpass = "SQLpass";
        $dbname = "schema";
 ?>


<html>
<head>
        <title> BugMe Issue Tracker- Issue Details </title>
        <link rel = "stylesheet" href= "/CSS SCRIPTS/detailspage.css"/>
</head>
</html>

          
<?php
    
        echo '<body stylesheet=styles/p1a.css>';
        echo '<h1>'.$row["title"].'</h1>';
        echo '<p>'.$row['description'].'</p>';
        echo '<h3>'.$row['id'].'</h3>';

        echo '<div id="box">';

        echo '<p>'.$row['assigned-to'].'</p>';
        echo '<p>'.$row['type'].'</p>';
        echo '<p>'.$row['priority'].'</p>';
        echo'<p>'.$row['status'].'</p>';
        echo '</div>';   
        

        echo '</div>';
           echo ' <button id="Cbtn"> Mark as Closed</button>';
            echo '<button id="Pbtn"> Mark In Progress</button>';
        echo '</div>';

        echo'<p>'.$row['created-by'].'</p>';
        echo'<p>'.$row['updated'].'</p>';
        echo '</body>';
        
    $issue= array();
    try {
        $conn = new PDO("mysql: host=$host; dbname=$dbname;", $dbusername, $dbpass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $stmt = $conn->query("SELECT * FROM issues");
        $row = $stmt->fetch(PDO::FETCH_NUM);
        

    }catch(Exception $e) 
    {
        
    }
        ?>