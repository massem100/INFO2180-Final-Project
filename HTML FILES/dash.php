 <html> 
 

 <head> 
       <title> BugMe Issue Tracker- Home </title>
       <link rel = "stylesheet" href= "/CSS SCRIPTS/dashboard.css"/>
      
</head>
     
 
 <body id ="dashboard">
 
         <div class = "header"> 
              <div id= "header-container">
                  <img id = "image" src = "/icons/bug white.png"
                  <h3 id ="Bugme">Bugme Issue Tracker</h3> 
              </div>
                    
         </div>
               
             <div id = "nav">
                 
                  <div id ="link">
                     <p id = "home_btn"><img src="/icons/Home icon.png" > Home</p> <br>
                    <p id = "user_link"><img src="/icons/add user.png" > Add New User</p><br>
                       <p id = "Issue_link" > <img src="/icons/new.png" > New Issue </p><br>
                       <p id = "Logout" ><img src="/icons/Logout.png" > Logout</p>
                     </div>
                     
            </div>
                    
         
    <div id = "fields">
            <div id = "issues_wrapper">
                
               <h1>Issues</h1>
               <h4 id= "Issue">Create New Issue</h4>
            </div>
        <div id = "Filters">
                   <h4 id = "Filter">Filter by:</h4>
                    <h4 class = "highlight" id = "All">ALL</h4>
                    <h4 class = "highlight" id = "Open">OPEN</h4>
                    <h4 class = "highlight" id = "Tickets">MY TICKETS</h4>
                </div>
                </div>
                
                <div id = "content">  
                
                <?php
                            $host = "localhost";
                            $dbusername = "final_user";
                            $dbpass = "SQLpass";
                            $dbname = "schema";
                           
                
                         
                        $conn = new PDO("mysql: host=$host; dbname=$dbname;", $dbusername, $dbpass);
                        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                
                        $stmt = $conn-> query("SELECT * FROM issues"); 
            			$results = $stmt -> fetchAll(PDO::FETCH_ASSOC);
                            	echo '<table id = "output_table">'; 
                                echo '<tr>'; 
                                echo '<th> Title </th>'; 
                                echo '<th> Type </th>'; 
                                echo '<th>Status</th>'; 
                                echo '<th>Assigned To</th>'; 
                                echo '<th>Created</th>';
                                echo '</tr>'; 
                                
                                foreach ($results as $row){ 
                                
                                    echo '<tr>'; 
                                    echo '<td>' . $row['title'] . '</td>'; 
                                    echo '<td>' . $row['issue_type'] . '</td>';
                                    echo '<td>' . $row['status'] . '</td>'; 
                                    echo '<td>' . $row['assigned_to'] . '</td>';
                                    echo '<td>' . $row['created'] . '</td>';
                                    echo '</tr>';
                                 
                                } 
                               
                    echo '</table>';
                    ?>
                
                </div>
            </div>

		   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                
    <script src="/app.js" type="text/javascript"></script>
   </body>
   
    
     </html>
              