const form = document.getElementById("login-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    // Simulate a login process (replace with actual authentication)
    if (username === "user" && password === "password") {
        alert("Login successful!");
    } else {
        alert("Login failed. Please check your username and password.");
    }
});
