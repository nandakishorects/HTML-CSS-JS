document.getElementById('bankLoginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const user = document.getElementById('username').value;
    const pass = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Simple validation check
    if (user === "admin" && pass === "1234") {
        messageDiv.style.color = "green";
        messageDiv.innerText = "Success! Redirecting...";
        setTimeout(() => alert("Logged In"), 500);
    } else {
        messageDiv.style.color = "red";
        messageDiv.innerText = "Error: Invalid credentials.";
    }
});