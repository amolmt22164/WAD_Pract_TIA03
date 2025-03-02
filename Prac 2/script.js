document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get user input values
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = { name, email, password };

        // Store in local storage
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push(userData);
        localStorage.setItem("users", JSON.stringify(users));

        // AJAX POST request (using JSONPlaceholder API as a dummy backend)
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://jsonplaceholder.typicode.com/users", true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 201) {
                alert("User registered successfully!");
                form.reset();
            }
        };
        xhr.send(JSON.stringify(userData));
    });
});
