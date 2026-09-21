const form = document.getElementById("appointmentForm");
const successBox = document.getElementById("appointmentSuccess");

const nameInput = document.getElementById("pname");
const phoneInput = document.getElementById("phone");
const emailInput = document.getElementById("email");
const dateInput = document.getElementById("appdate");
const deptInput = document.getElementById("department");
const newPatientRadio = document.getElementById("ptypeNew");
const existingPatientRadio = document.getElementById("ptypeExisting");
const symptomsInput = document.getElementById("symptoms");
const termsInput = document.getElementById("terms");

const nameError = document.getElementById("nameError");
const phoneError = document.getElementById("phoneError");
const emailError = document.getElementById("emailError");
const dateError = document.getElementById("dateError");
const deptError = document.getElementById("departmentError");
const typeError = document.getElementById("patientTypeError");
const symptomsError = document.getElementById("symptomsError");
const termsError = document.getElementById("termsError");

function validateName() {
    let name = nameInput.value.trim();
    let namePattern = /^[A-Za-z\s]+$/;

    if (name === "") {
        nameInput.classList.add("error");
        nameError.textContent = "Patient Name is required.";
        return false;
    } else if (!namePattern.test(name)) {
        nameInput.classList.add("error");
        nameError.textContent = "Patient Name should contain only letters and spaces.";
        return false;
    } else {
        nameInput.classList.remove("error");
        nameError.textContent = "";
        return true;
    }
}

function validatePhone() {
    let phone = phoneInput.value.trim();
    let phonePattern = /^[6-9][0-9]{9}$/;

    if (phone === "") {
        phoneInput.classList.add("error");
        phoneError.textContent = "Phone Number is required.";
        return false;
    } else if (!phonePattern.test(phone)) {
        phoneInput.classList.add("error");
        phoneError.textContent = "Please enter a valid 10-digit mobile number.";
        return false;
    } else {
        phoneInput.classList.remove("error");
        phoneError.textContent = "";
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

function validateDate() {
    let dateVal = dateInput.value;

    if (dateVal === "") {
        dateInput.classList.add("error");
        dateError.textContent = "Please select an appointment date.";
        return false;
    }

    let selected = new Date(dateVal + "T00:00:00");
    let today = new Date();
    today.setHours(0, 0, 0, 0);

    if (selected < today) {
        dateInput.classList.add("error");
        dateError.textContent = "Appointment date cannot be in the past.";
        return false;
    } else {
        dateInput.classList.remove("error");
        dateError.textContent = "";
        return true;
    }
}

function validateDepartment() {
    let dept = deptInput.value;

    if (dept === "") {
        deptInput.classList.add("error");
        deptError.textContent = "Please select a department.";
        return false;
    } else {
        deptInput.classList.remove("error");
        deptError.textContent = "";
        return true;
    }
}

function validatePatientType() {
    if (!newPatientRadio.checked && !existingPatientRadio.checked) {
        typeError.textContent = "Please select a patient type.";
        return false;
    } else {
        typeError.textContent = "";
        return true;
    }
}

function validateSymptoms() {
    let symptoms = symptomsInput.value.trim();

    if (symptoms === "") {
        symptomsInput.classList.add("error");
        symptomsError.textContent = "Please enter the reason for your visit.";
        return false;
    } else {
        symptomsInput.classList.remove("error");
        symptomsError.textContent = "";
        return true;
    }
}

function validateTerms() {
    if (!termsInput.checked) {
        termsError.textContent = "Please agree to the hospital terms and conditions.";
        return false;
    } else {
        termsError.textContent = "";
        return true;
    }
}

function formatAppointmentDate(dateString) {
    let parts = dateString.split("-");
    let year = parts[0];
    let monthNumber = parseInt(parts[1], 10) - 1;
    let day = parseInt(parts[2], 10);

    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return day + " " + months[monthNumber] + " " + year;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    successBox.style.display = "none";
    successBox.innerHTML = "";

    let nameValid = validateName();
    let phoneValid = validatePhone();
    let emailValid = validateEmail();
    let dateValid = validateDate();
    let deptValid = validateDepartment();
    let typeValid = validatePatientType();
    let symptomsValid = validateSymptoms();
    let termsValid = validateTerms();

    if (nameValid && phoneValid && emailValid && dateValid && deptValid && typeValid && symptomsValid && termsValid) {
        let formattedDate = formatAppointmentDate(dateInput.value);
        let patientType = newPatientRadio.checked ? "New Patient" : "Existing Patient";

        successBox.innerHTML =
            "<h3>Appointment Booked Successfully!</h3>" +
            "<p><strong>Patient Name:</strong> " + nameInput.value.trim() + "</p>" +
            "<p><strong>Department:</strong> " + deptInput.value + "</p>" +
            "<p><strong>Appointment Date:</strong> " + formattedDate + "</p>" +
            "<p><strong>Patient Type:</strong> " + patientType + "</p>";

        successBox.style.display = "block";
    }
});

form.addEventListener("reset", function () {
    nameInput.classList.remove("error");
    nameError.textContent = "";

    phoneInput.classList.remove("error");
    phoneError.textContent = "";

    emailInput.classList.remove("error");
    emailError.textContent = "";

    dateInput.classList.remove("error");
    dateError.textContent = "";

    deptInput.classList.remove("error");
    deptError.textContent = "";

    typeError.textContent = "";

    symptomsInput.classList.remove("error");
    symptomsError.textContent = "";

    termsError.textContent = "";

    successBox.style.display = "none";
    successBox.innerHTML = "";
});
