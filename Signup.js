document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const toggleFormLink = document.getElementById('toggleForm');
    const formTitle = document.getElementById('formTitle');

    signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateSignupForm()) {
            alert('Sign Up Successful!');
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Log In Successful!');
    });

    toggleFormLink.addEventListener('click', function (event) {
        event.preventDefault();
        toggleForms();
    });

    function validateSignupForm() {
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Basic email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Invalid email format');
            return false;
        }

        // Check if password and confirm password match
        if (password !== confirmPassword) {
            alert('Password and Confirm Password do not match');
            return false;
        }

        return true;
    }

);
