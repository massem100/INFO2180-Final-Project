"use strict";
window.onload = () =>{
    
    let home= document.getElementById("home_btn");
    home.addEventListener("click", (e)=>{
         console.log("HOME BTN CLICKED");
        //  $("#dashboard").hide();
        $("#header").show();
        
       $.ajax({
            type: "POST",
            url: "/PHP SCRIPTS/dashboard.php",
            data: $("#login-form").serializeArray(), 
            success: function(data) {
            
                let result = document.getElementById("dashboard");
                result.innerHTML = data;
                
                
             
            },
            dataType: "text"

        });
    
    });
    
    let new_user = document.getElementById("user_link");
    new_user.addEventListener("click", (e)=>{
         e.preventDefault();
         console.log("USER BTN CLICKED");
        
                $("#fields").hide();
                $("#Filters").hide();
            $("#output_table").hide();
                
       $.ajax({
            type: "POST",
            url: "/PHP SCRIPTS/newuser.php",
            data: $("#submit").serializeArray(), 
            success: function(data) {
            //     //  header("Location: /HTML FILES/newuser.html");
                 var result = document.getElementById("content");
                result.innerHTML = data;
                
                   $("#submit").submit((e)=>{
                        e.preventDefault();
                      });
       },
                dataType: "text"
                    
           });
                    
                     
                
    });
    
            
    
        let Issue_link= document.getElementById("Issue_link");
        Issue_link.addEventListener("click", (e)=>{
         e.preventDefault();
         console.log("CREATE NEW ISSUE CLICKED");
          $("#fields").hide();
                $("#Filters").hide();
                                $("#output_table").hide();
       $.ajax({
            type: "POST",
            url: "/PHP SCRIPTS/createissue.php",
            data: $("#issue_form").serializeArray(), 
            success: function(data) {
            
                let result = document.getElementById("content");
                result.innerHTML = data;
                
             
            },
            dataType: "text"

        });
        });
    
        
        let logout= document.getElementById("Logout");
        logout.addEventListener("click", (e)=>{
         e.preventDefault();
         console.log("LOGOUT BTN CLICKED");
        
         $(".header").hide();
         
          $("#nav").hide();
          $("#fields").hide();
        $("#Filters").hide();
         
       $.ajax({
            type: "POST",
            url: "/PHP SCRIPTS/logout.php",
            data: "/HTML FILES/logout.html",
            success: function(data) {
            
                let result = document.getElementById("dashboard");
                result.innerHTML = data;
                
             
            },
            dataType: "text"

        });
    
        
    });
    
   
    
   /* function successMsg(){
        alert("New record created successfully");
        
    }
        */
   function ValidateForm(form){
	var firstName=document.form.firstName.value;
	var lastName=document.form.LastName.value;
	var email=document.form.email.value;
	var password=document.form.password.value;
	var formData=[fname, lname,email,password];

	validateEmptyCell(formData);
	validateEmail(email);
	validatePassword(password);

	function validateEmptyCell(){
		var i;
		for(i in formData){

			if (formData[i]=="" || formData[i]==null){
				/* Save variable into text... add css to the test then call the variable in alert*/
				alert("The"+ " " + i.value +" "+ "is empty");
				
			}
		}
	}
	function validateEmail(){
		var pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if(pattern.test(email)){
			return true;
		}else{
			alert("Invalid email entered");
		}
	}

	function validatePassword(){
	 /* Add Regular Expressions to restrict password submissions*/
// 	 $scope.passwordStrength = {
//                     "float": "left",
//                     "width": "100px",
//                     "height": "25px",
//                     "margin-left": "5px"
//                 };
            var passwordRegex = new Regex(/(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.{8,})/);
            
                $scope.analyze = function(value) {
                    if(passwordRegex.test(value)) {
                        $scope.passwordStrength["background-color"] = "green";
                    } else if(mediumRegex.test(value)) {
                        $scope.passwordStrength["background-color"] = "orange";
                    } else {
                        $scope.passwordStrength["background-color"] = "red";
                    }
                };

            }
	

}

function filterSelection(input) {
                var filter, table, tr, td, i, txtValue;
                filter = input.toUpperCase();
                table = document.getElementById("issue-content-table");
                tr = table.getElementsByTagName("tr");
                for (i = 1; i < tr.length; i++) {
                    td = tr[i].getElementsByTagName("td")[2].getAttribute("data-status");
                    if (td) {
                        if (td.toUpperCase() === filter || filter === "ALL"){
                            tr[i].style.display = "";
                        }
                        else{
                            tr[i].style.display = "none";
                        }
                    } 
                }
            }

            function filterMyTicket(input) {
                var filter, table, tr, td, i, txtValue;
                filter = input.toUpperCase();
                table = document.getElementById("issue-content-table");
                tr = table.getElementsByTagName("tr");
                for (i = 1; i < tr.length; i++) {
                    assignee = tr[i].getElementsByTagName("td")[3].textContent;

                    //function to get user from DB
                    
                    var user = "James Harbey";
                    
                    if (assignee) {
                        if (assignee === user){
                            tr[i].style.display = "";
                        }
                        else{
                            tr[i].style.display = "none";
                        }
                    } 
                }
            }

}