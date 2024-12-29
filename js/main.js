document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Array to store users
    let users = [
        { username: 'Astra', password: 'Astra' },
        { username: 'Deus', password: 'Deus' },
        { username: 'Mahko', password: 'Mahko' },
        { username: 'Musang', password: 'Musang' }
    ];

    // Add event when submit
    loginForm.addEventListener('submit', function (event) {
        // To stop refreshing page
        event.preventDefault();
        // Get value from input
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        if (validateLogin(username, password)) {
            alert('Login successful');
            window.location.href = 'Beranda.html';  // Redirect to home.html
        } else {
            alert('Login failed');
        }
    });
    
    signupForm.addEventListener('submit', function (event) {
        // To stop refreshing page
        event.preventDefault();
        // Get value from input
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;
        const confirmPassword = document.getElementById('signup-confirm-password').value;

        // Validation
        if (validateSignup(username, email, password, confirmPassword)) {
            alert('Signup successful');
            users.push({ username: username, password: password });
            console.log(users); // For debugging purposes
            showLoginForm();
        } else {
            alert('Signup failed');
        }
    });

    function validateLogin(username, password) {
        // Check if input value is null
        if (username.trim() === '' || password.trim() === '') {
            alert('Username and Password cannot be empty');
            return false;
        }

        // Check if user exists in the users array
        const user = users.find(user => user.username === username && user.password === password);
        if (!user) {
            alert('Invalid username or password');
            return false;
        }

        return true;
    }

    function validateSignup(username, email, password, confirmPassword) {
        // Check if input value is null
        if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('All fields are required');
            return false;
        }

        // Check email format
        if (!validateEmail(email)) {
            alert('Invalid email format');
            return false;
        }
        // Check password format
        if (!validatePassword(password)) {
            alert('Password must contain at least one uppercase letter, one symbol, and one number');
            return false;
        }

        // Check if password match
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return false;
        }

        // Check if username already exists
        const userExists = users.some(user => user.username === username);
        if (userExists) {
            alert('Username already taken');
            return false;
        }

        return true;
    }

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePassword(password) {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
        return passwordRegex.test(password);
    }
});

// Show sign up
function showSignupForm() {
    $("title").text("Daftar | E-Library");
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
}

// Show login
function showLoginForm() {
    $("title").text("Masuk | E-Library");
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
}
