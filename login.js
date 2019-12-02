"use strict";

window.onload =()=> {

     
    
    let login = document.getElementById("login-btn");
    login.addEventListener("click", (e) => {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/PHP SCRIPTS/login.php",
            data: $("#login-form").serializeArray(), 
            success: function(data) {
                let dash_content = window.location.replace("/PHP SCRIPTS/dashboard.php");
                
                let result = document.getElementById("dashboard"); 
                results.innerHTML = data;

                
            },
            dataType: "text"

        });

    });
    
    
    
 
}
