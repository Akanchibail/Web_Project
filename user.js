document.addEventListener('DOMContentLoaded', function() {
    var registrationForm = document.getElementById('registrationForm');
    var loginForm = document.getElementById('loginForm');

    if (registrationForm) {
        registrationForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var firstName = document.getElementById('firstname').value;
            var lastName = document.getElementById('lastname').value;
            var userName = document.getElementById('username').value;
            var password = document.getElementById('password').value;
        
            var user = {
                firstname: firstname,
                lastname: lastname,
                username: username,
                password: password
            };
        
            console.log(user);
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();

            var userName = document.getElementById('username').value;
            var password = document.getElementById('password').value;
        
            var user = {
                username: username,
                password: password
            };
        
            console.log(user);
            //window.alert("hi");
        });

    }
        });