let welcomeElement = document.getElementById("welcomeMessage");
if (welcomeElement) {
    welcomeElement.textContent = "Welcome to City Care Hospital!";
}

let dateElement = document.getElementById("todayDate");
if (dateElement) {
    let today = new Date();
    let day = today.getDate();
    let monthNumber = today.getMonth();
    let year = today.getFullYear();

    let months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    dateElement.textContent = "Today's Date: " + day + " " + months[monthNumber] + " " + year;
}

let beds = 0;
let doctors = 0;
let departments = 0;
let years = 0;

let bedsTarget = 150;
let doctorsTarget = 45;
let deptTarget = 6;
let yearsTarget = 20;

let statInterval = setInterval(function () {
    if (beds < bedsTarget) {
        beds = beds + 5;
        document.getElementById("bedsCount").textContent = beds;
    }
    if (doctors < doctorsTarget) {
        doctors = doctors + 1;
        document.getElementById("doctorsCount").textContent = doctors;
    }
    if (departments < deptTarget) {
        departments = departments + 1;
        document.getElementById("deptCount").textContent = departments;
    }
    if (years < yearsTarget) {
        years = years + 1;
        document.getElementById("yearsCount").textContent = years + "+";
    }

    if (beds >= bedsTarget && doctors >= doctorsTarget && departments >= deptTarget && years >= yearsTarget) {
        clearInterval(statInterval);
    }
}, 30);

let galleryImages = document.querySelectorAll(".gallery-img");
let selectedImageText = document.getElementById("selectedImageText");

for (let i = 0; i < galleryImages.length; i++) {
    galleryImages[i].addEventListener("click", function () {
        let imageName = this.getAttribute("alt");
        selectedImageText.textContent = "You selected: " + imageName;
    });
}

let emergencyButton = document.getElementById("emergencyBtn");
let emergencyText = document.getElementById("emergencyText");

if (emergencyButton) {
    emergencyButton.addEventListener("click", function () {
        emergencyText.textContent = "24x7 Emergency Helpline: Please contact the hospital immediately.";
    });
}

let savedMessage = document.getElementById("savedNewsletterMsg");
let savedEmail = localStorage.getItem("newsletterEmail");

if (savedEmail && savedMessage) {
    savedMessage.textContent = "You are subscribed to our newsletter.";
    savedMessage.style.display = "block";
}

let newsletterForm = document.getElementById("newsletterForm");
let newsletterInput = document.getElementById("newsletterEmail");
let newsletterError = document.getElementById("newsletterError");
let newsletterSuccess = document.getElementById("newsletterSuccess");

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
        event.preventDefault();

        newsletterError.textContent = "";
        newsletterSuccess.textContent = "";

        let email = newsletterInput.value.trim();
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (email === "") {
            newsletterError.textContent = "Email is required.";
            return;
        }

        if (!emailPattern.test(email)) {
            newsletterError.textContent = "Please enter a valid email address.";
            return;
        }

        localStorage.setItem("newsletterEmail", email);
        newsletterSuccess.textContent = "Successfully subscribed to our newsletter!";
        newsletterInput.value = "";

        if (savedMessage) {
            savedMessage.textContent = "You are subscribed to our newsletter.";
            savedMessage.style.display = "block";
        }
    });
}
