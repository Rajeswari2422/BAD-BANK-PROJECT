document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signupForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form submission

        const fullname = document.getElementById("fullname").value;
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userData = {
            fullname: fullname,
            username: username,
            email: email,
            password: password
        };

        // Save user data in localStorage
        localStorage.setItem("userData", JSON.stringify(userData));
        alert("Signup successful!");

        // Redirect to login page
        window.location.href = "login.html";
    });
});
