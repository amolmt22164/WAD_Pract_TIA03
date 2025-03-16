document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let nameInput = document.getElementById("name").value;
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;

    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let formIsValid = true;

    if (nameInput === "") {
        document.getElementById("nameError").textContent = "Please enter your name.";
        formIsValid = false;
    }

    if (emailInput === "") {
        document.getElementById("emailError").textContent = "Please enter your email.";
        formIsValid = false;
    } else if (!emailInput.includes("@") || !emailInput.includes(".")) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        formIsValid = false;
    }

    if (passwordInput === "") {
        document.getElementById("passwordError").textContent = "Please enter a password.";
        formIsValid = false;
    } else if (passwordInput.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        formIsValid = false;
    }

    if (formIsValid) {
        alert("Registration successful!");
        document.getElementById("registrationForm").reset();
    }
});
