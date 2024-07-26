const email = document.getElementById('email');

const emailValue = email.value;
if (emailValue === '') {
        errorMessage(email, "Email is empty");
    } else if (!validateEmail(emailValue)) {
        errorMessage(email, "Email is invalid");
    } else {
        successMessage(email);
    }