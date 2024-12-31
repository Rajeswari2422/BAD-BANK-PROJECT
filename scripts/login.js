// Handle login and show alert message
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Retrieve saved credentials from local storage
        const savedUserData = JSON.parse(localStorage.getItem("userData"));

        // Check if credentials match
        if (savedUserData && savedUserData.username === username && savedUserData.password === password) {
            // Show alert message and simulate login
            alert("Login successful!");

            // Redirect to home page or user dashboard
            window.location.href = "homepage.html";
        } else {
            // Show alert message for invalid credentials
            alert("Invalid username or password!");
        }
    });
});
