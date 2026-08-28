document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateSignupForm()) {
            alert('Login Successful!');
        }
    });

    function validateSignupForm() {
        const email = document.getElementById('email').value;

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            return false;
        }

        return true;
    }
});
