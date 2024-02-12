function validateForm(event) {
    event.preventDefault();

    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    var isAuthenticated = (username === "Shreyas" && password === "Shre");

    var errorMessage = document.getElementById("error-message");

    if (isAuthenticated) {
        errorMessage.innerText = "";
        alert("Login successful! Redirecting to the next page...");
        
    } else {
        errorMessage.innerText = "Incorrect username or password. Please try again.";
    }
}
