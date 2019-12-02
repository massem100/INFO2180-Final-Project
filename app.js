"use strict";
window.onload = () =>{
    
    let home= document.getElementById("home_btn");
    home.addEventListener("click", (e)=>{
         console.log("HOME BTN CLICKED");
       $.ajax({
            type: "POST",
            url: "/PHP SCRIPTS/dashboard.php",
            data: $("#login-form").serializeArray(), 
            success: function(data) {
            
                let result = document.getElementById("content");
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
                
       $.ajax({
            type: "POST",
            url: "/PHP SCRIPTS/newuser.php",
            data: $("#submit").serializeArray(), 
            // success: function(data) {
            //     //  header("Location: /HTML FILES/newuser.html");
                 
                dataType: "text"
                    
           }).done((data)=> {
                    
                var result = document.getElementById("content");
                result.innerHTML = data;
                
                   $("#submit").submit((e)=>{
                        e.preventDefault();
                      });
                    
                
                    
                    // $("#SUCCESS").removeClass('error');
                    //  $("#SUCCESS").addClass('success');
                     
                      $("#SUCCESS").text(data);
                     
                    //  success_msg.val('');
                    
                    
                    
                }).fail( (data)=>{
                    
                    $("#SUCCESS").removeClass('success');
                    $("#SUCCESS").addClass('error');
                     
                     if (data.response !== ''){
                          $("#SUCCESS").response(data.responseText);
                         
                     }else{
                          $("#SUCCESS").innerHTML = " Form Information could not be sent, Reload."
                     }
                     });
                     
                
    });
    
            
    
        let Issue_link= document.getElementById("Issue_link");
        Issue_link.addEventListener("click", (e)=>{
         e.preventDefault();
         console.log("CREATE NEW ISSUE CLICKED");
          $("#fields").hide();
                $("#Filters").hide();
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
            data: "YOU have logged out",
            success: function(data) {
            
                let result = document.getElementById("home-page");
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

}