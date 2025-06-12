const loginForm = document.getElementById('loginForm');   


loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent   
login-form.submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Replace these with your actual username and password
    const correctUsername = 'your_username';
    const correctPassword = 'your_password';

    if (username === correctUsername && password === correctPassword) {
        // Successful login
        alert('Login successful!');
    } else {
        // Incorrect login
        alert('Invalid username or password.');
    }
});