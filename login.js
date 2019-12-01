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
                
                window.location.replace("/HTML FILES/dashboard.html");
                
            },
            dataType: "text"

        });

    });
    
    
    
 
}
