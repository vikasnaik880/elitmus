function login() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	if (username == "admin" && password == "password") {
		alert("Login successful!");
		window.location.href = "home.html"; // Redirect to welcome page
	} else {
		alert("Invalid username or password.");
	}
}
