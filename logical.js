const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const emailSuccess = document.getElementById('email-success');
const passwordSuccess = document.getElementById('password-success');
const form = document.getElementById('signup-form');

// Function to check if email is valid
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Function to check if password is valid
function validatePassword(password) {
    return password.length >= 8;
}

// Function to update error messages
function updateErrorMessage(input, errorElement, successElement, isValid) {
    if (!isValid) {
        errorElement.textContent = 'Invalid input';
        successElement.textContent = '';
    } else {
        errorElement.textContent = '';
        successElement.textContent = 'All good to go!';
    }
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);

    updateErrorMessage(email, emailError, emailSuccess, isEmailValid);
    updateErrorMessage(password, passwordError, passwordSuccess, isPasswordValid);

    if (isEmailValid && isPasswordValid) {
        
            alert('Successful signup!');
        } else {
            // Clear input fields
            emailInput.value = '';
            passwordInput.value = '';
            emailError.textContent = '';
            passwordError.textContent = '';
            emailSuccess.textContent = '';
            passwordSuccess.textContent = '';
        
    }
}

// Event listeners
emailInput.addEventListener('input', function() {
    const email = this.value.trim();
    const isValid = email.length > 3 && validateEmail(email);
    updateErrorMessage(email, emailError, emailSuccess, isValid);
});

passwordInput.addEventListener('input', function() {
    const password = this.value.trim();
    const isValid = password.length > 8;
    updateErrorMessage(password, passwordError, passwordSuccess, isValid);
});

form.addEventListener('submit', handleSubmit);
