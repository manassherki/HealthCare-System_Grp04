const form = document.getElementById("signupForm");
const successBox = document.getElementById("signupSuccess");

const fullnameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm_password");

const fullnameError = document.getElementById("fullnameError");
const emailError = document.getElementById("emailError");
const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

function validateFullName() {
    let name = fullnameInput.value.trim();
    let namePattern = /^[A-Za-z\s]+$/;

    if (name === "") {
        fullnameInput.classList.add("error");
        fullnameError.textContent = "Full Name is required.";
        return false;
    } else if (!namePattern.test(name)) {
        fullnameInput.classList.add("error");
        fullnameError.textContent = "Full Name should contain only letters and spaces.";
        return false;
    } else {
        fullnameInput.classList.remove("error");
        fullnameError.textContent = "";
        return true;
    }
}

function validateEmail() {
    let email = emailInput.value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        emailInput.classList.add("error");
        emailError.textContent = "Email is required.";
        return false;
    } else if (!emailPattern.test(email)) {
        emailInput.classList.add("error");
        emailError.textContent = "Please enter a valid email address.";
        return false;
    } else {
        emailInput.classList.remove("error");
        emailError.textContent = "";
        return true;
    }
}

function validateUsername() {
    let username = usernameInput.value.trim();
    let usernamePattern = /^[A-Za-z0-9_]+$/;

    if (username === "") {
        usernameInput.classList.add("error");
        usernameError.textContent = "Username is required.";
        return false;
    } else if (username.length < 4) {
        usernameInput.classList.add("error");
        usernameError.textContent = "Username must be at least 4 characters long.";
        return false;
    } else if (!usernamePattern.test(username)) {
        usernameInput.classList.add("error");
        usernameError.textContent = "Username should contain only letters, numbers, and underscores.";
        return false;
    } else {
        usernameInput.classList.remove("error");
        usernameError.textContent = "";
        return true;
    }
}

function validatePassword() {
    let password = passwordInput.value;

    if (password === "") {
        passwordInput.classList.add("error");
        passwordError.textContent = "Password is required.";
        return false;
    } else if (password.length < 8) {
        passwordInput.classList.add("error");
        passwordError.textContent = "Password must be at least 8 characters long.";
        return false;
    } else {
        passwordInput.classList.remove("error");
        passwordError.textContent = "";
        return true;
    }
}

function validateConfirmPassword() {
    let confirmPassword = confirmPasswordInput.value;
    let password = passwordInput.value;

    if (confirmPassword === "") {
        confirmPasswordInput.classList.add("error");
        confirmPasswordError.textContent = "Please confirm your password.";
        return false;
    } else if (confirmPassword !== password) {
        confirmPasswordInput.classList.add("error");
        confirmPasswordError.textContent = "Passwords do not match.";
        return false;
    } else {
        confirmPasswordInput.classList.remove("error");
        confirmPasswordError.textContent = "";
        return true;
    }
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    successBox.style.display = "none";
    successBox.innerHTML = "";

    let nameValid = validateFullName();
    let emailValid = validateEmail();
    let usernameValid = validateUsername();
    let passwordValid = validatePassword();
    let confirmValid = validateConfirmPassword();

    if (nameValid && emailValid && usernameValid && passwordValid && confirmValid) {
        successBox.innerHTML =
            "<h3>Account Created Successfully!</h3>" +
            "<p>Welcome to City Care Hospital, <strong>" + fullnameInput.value.trim() + "</strong>!</p>" +
            "<p>Your username <strong>" + usernameInput.value.trim() + "</strong> has been registered. You can now <a href='sign_in.html'>Sign In</a>.</p>";

        successBox.style.display = "block";
    }
});
