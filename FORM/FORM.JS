//PROJECT TASK 3 
//CREATING FORM AND STORING USER DATA IN ARRAY
let usersData = [];

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const contact = document.getElementById("contact");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const gender = document.getElementById("gender");
    const dob = document.getElementById("dob");

    const inputs = [firstName, lastName, email, contact, password, confirmPassword, gender, dob];

    inputs.forEach(input => {
        const error = input.nextElementSibling;
        if (input.value.trim() === "") {
            error.textContent = "This field is required";
            isValid = false;
        } else {
            error.textContent = "";
        }
    });

    // Password match check
    if (password.value !== confirmPassword.value) {
        confirmPassword.nextElementSibling.textContent = "Passwords do not match";
        isValid = false;
    }

    if (isValid) {                  //MY USER DATA WILL STORED IN AN ARRAY FORM
        const user = {
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            contact: contact.value,
            password: password.value,
            gender: gender.value,
            dob: dob.value
        };


        usersData.push(user); //<<I USE .PUSH AND WILL PUSH ELEMENT INSIDE AN ARRAY

        console.log("Current Stored Data:");
        console.log(usersData);

        alert("Data Stored Successfully!");

        // Reset form
        document.getElementById("registrationForm").reset();
    }
});