//your code here
document.getElementById("internship-form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        let isValid = true;

        const firstName = document.getElementById("first-name-input");
        if (firstName.value.trim() === "") {
            firstName.classList.add("is-invalid");
            isValid = false;
        } else {
            firstName.classList.remove("is-invalid");
            firstName.classList.add("is-valid");
        }

        const lastName = document.getElementById("last-name-input");
        if (lastName.value.trim() === "") {
            lastName.classList.add("is-invalid");
            isValid = false;
        } else {
            lastName.classList.remove("is-invalid");
            lastName.classList.add("is-valid");
        }

        const email = document.getElementById("email-input");
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            email.classList.add("is-invalid");
            isValid = false;
        } else {
            email.classList.remove("is-invalid");
            email.classList.add("is-valid");
        }

        const college = document.getElementById("college-input");
        if (college.value.trim() === "") {
            college.classList.add("is-invalid");
            isValid = false;
        } else {
            college.classList.remove("is-invalid");
            college.classList.add("is-valid");
        }

        const rollNo = document.getElementById("roll-no-input");
        if (rollNo.value.trim() === "") {
            rollNo.classList.add("is-invalid");
            isValid = false;
        } else {
            rollNo.classList.remove("is-invalid");
            rollNo.classList.add("is-valid");
        }

        const graduationYear = document.getElementById("graduation-year");
        if (graduationYear.value === "") {
            graduationYear.classList.add("is-invalid");
            isValid = false;
        } else {
            graduationYear.classList.remove("is-invalid");
            graduationYear.classList.add("is-valid");
        }

        const conditions = document.getElementById("conditions-checkbox");
        if (!conditions.checked) {
            conditions.classList.add("is-invalid");
            isValid = false;
        } else {
            conditions.classList.remove("is-invalid");
            conditions.classList.add("is-valid");
        }

        if (isValid) {
            alert("Form submitted successfully!");
            document.getElementById("internship-form").reset(); // Reset form
            document.querySelectorAll(".form-control").forEach((el) => el.classList.remove("is-valid"));
            document.querySelectorAll(".form-check-input").forEach((el) => el.classList.remove("is-valid"));
        }
    });