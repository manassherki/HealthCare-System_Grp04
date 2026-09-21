// registration.js - Form Validation for Patient Registration
// College Web Development Practical - City Care Hospital

// Get form and message elements from DOM
const form = document.getElementById("registrationForm");
const successMessage = document.getElementById("successMessage");

// Get input fields
const patientNameInput = document.getElementById("patientName");
const dobInput = document.getElementById("dob");
const genderInput = document.getElementById("gender");
const bloodGroupInput = document.getElementById("bloodGroup");
const mobileInput = document.getElementById("mobile");
const emailInput = document.getElementById("email");
const addressInput = document.getElementById("address");
const departmentInput = document.getElementById("department");
const registrationDateInput = document.getElementById("registrationDate");

// Get error message spans
const nameError = document.getElementById("nameError");
const dobError = document.getElementById("dobError");
const genderError = document.getElementById("genderError");
const bloodGroupError = document.getElementById("bloodGroupError");
const mobileError = document.getElementById("mobileError");
const emailError = document.getElementById("emailError");
const addressError = document.getElementById("addressError");
const departmentError = document.getElementById("departmentError");
const registrationDateError = document.getElementById("registrationDateError");

// Helper function to set an error on a field
function showError(inputElement, errorSpan, message) {
    inputElement.classList.add("error");
    errorSpan.textContent = message;
}

// Helper function to clear an error from a field
function clearError(inputElement, errorSpan) {
    inputElement.classList.remove("error");
    errorSpan.textContent = "";
}

// TASK 2: Validate Patient Name (not empty, trimmed, letters and spaces only)
function validateName() {
    let name = patientNameInput.value.trim();
    let namePattern = /^[A-Za-z\s]+$/;

    if (name === "") {
        showError(patientNameInput, nameError, "Patient Name is required.");
        return false;
    } else if (!namePattern.test(name)) {
        showError(patientNameInput, nameError, "Patient Name should contain only letters and spaces.");
        return false;
    } else {
        clearError(patientNameInput, nameError);
        return true;
    }
}

// TASK 2: Validate Address (not empty, trimmed)
function validateAddress() {
    let address = addressInput.value.trim();

    if (address === "") {
        showError(addressInput, addressError, "Address is required.");
        return false;
    } else {
        clearError(addressInput, addressError);
        return true;
    }
}

// TASK 3: Validate Mobile Number (10 digits, starts with 6, 7, 8, or 9)
function validateMobile() {
    let mobile = mobileInput.value.trim();
    let mobilePattern = /^[6-9][0-9]{9}$/;

    if (mobile === "") {
        showError(mobileInput, mobileError, "Mobile Number is required.");
        return false;
    } else if (!mobilePattern.test(mobile)) {
        showError(mobileInput, mobileError, "Mobile Number must contain 10 digits starting with 6, 7, 8, or 9.");
        return false;
    } else {
        clearError(mobileInput, mobileError);
        return true;
    }
}

// TASK 3: Validate Email Address (valid email format)
function validateEmail() {
    let email = emailInput.value.trim();
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        showError(emailInput, emailError, "Email address is required.");
        return false;
    } else if (!emailPattern.test(email)) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        return false;
    } else {
        clearError(emailInput, emailError);
        return true;
    }
}

// TASK 4: Validate Gender (must be selected)
function validateGender() {
    let gender = genderInput.value;

    if (gender === "") {
        showError(genderInput, genderError, "Please select Gender.");
        return false;
    } else {
        clearError(genderInput, genderError);
        return true;
    }
}

// TASK 4: Validate Blood Group (must be selected)
function validateBloodGroup() {
    let bloodGroup = bloodGroupInput.value;

    if (bloodGroup === "") {
        showError(bloodGroupInput, bloodGroupError, "Please select Blood Group.");
        return false;
    } else {
        clearError(bloodGroupInput, bloodGroupError);
        return true;
    }
}

// TASK 4: Validate Department / Appointment Type (must be selected)
function validateDepartment() {
    let department = departmentInput.value;

    if (department === "") {
        showError(departmentInput, departmentError, "Please select a Department / Appointment Type.");
        return false;
    } else {
        clearError(departmentInput, departmentError);
        return true;
    }
}

// TASK 4: Validate Date of Birth (required, must not be a future date)
function validateDOB() {
    let dobValue = dobInput.value;

    if (dobValue === "") {
        showError(dobInput, dobError, "Date of Birth is required.");
        return false;
    }

    let enteredDate = new Date(dobValue);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (enteredDate > today) {
        showError(dobInput, dobError, "Date of Birth cannot be a future date.");
        return false;
    } else {
        clearError(dobInput, dobError);
        return true;
    }
}

// TASK 4: Validate Registration Date (required, must not be a future date)
function validateRegistrationDate() {
    let regDateValue = registrationDateInput.value;

    if (regDateValue === "") {
        showError(registrationDateInput, registrationDateError, "Registration Date is required.");
        return false;
    }

    let enteredDate = new Date(regDateValue);
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (enteredDate > today) {
        showError(registrationDateInput, registrationDateError, "Registration Date cannot be a future date.");
        return false;
    } else {
        clearError(registrationDateInput, registrationDateError);
        return true;
    }
}

// Form Submit Event Handler
form.addEventListener("submit", function (event) {
    // Prevent default form submission to backend
    event.preventDefault();

    // Hide any previous success message
    successMessage.style.display = "none";
    successMessage.textContent = "";

    // Run all validation checks
    let isNameValid = validateName();
    let isDobValid = validateDOB();
    let isGenderValid = validateGender();
    let isBloodGroupValid = validateBloodGroup();
    let isMobileValid = validateMobile();
    let isEmailValid = validateEmail();
    let isAddressValid = validateAddress();
    let isDepartmentValid = validateDepartment();
    let isRegDateValid = validateRegistrationDate();

    // Check if all fields are valid
    if (
        isNameValid &&
        isDobValid &&
        isGenderValid &&
        isBloodGroupValid &&
        isMobileValid &&
        isEmailValid &&
        isAddressValid &&
        isDepartmentValid &&
        isRegDateValid
    ) {
        // Display clear success message
        successMessage.textContent = "Patient registration successful!";
        successMessage.style.display = "block";

        // Scroll to top of content so user sees the message
        successMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
});

// Form Reset Event Handler
form.addEventListener("reset", function () {
    // Clear all error classes and text messages
    clearError(patientNameInput, nameError);
    clearError(dobInput, dobError);
    clearError(genderInput, genderError);
    clearError(bloodGroupInput, bloodGroupError);
    clearError(mobileInput, mobileError);
    clearError(emailInput, emailError);
    clearError(addressInput, addressError);
    clearError(departmentInput, departmentError);
    clearError(registrationDateInput, registrationDateError);

    // Hide success message
    successMessage.style.display = "none";
    successMessage.textContent = "";
});
