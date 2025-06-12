const proceedButton = document.getElementById('proceedButton');
const phoneNumberBox = document.getElementById('phoneNumberBox');

proceedButton.addEventListener('click', () => {
    const userId = document.getElementById('userId').value;

    // Validate user ID here (e.g., check for empty input)

    if (userId) {
        phoneNumberBox.style.display = 'block';
        proceedButton.style.display = 'none';
    }
});
const payNowButton = document.getElementById('payNowButton');
const confirmationPopup = document.getElementById('confirmationPopup');
const confirmPaymentButton = document.getElementById('confirmPayment');
const cancelPaymentButton = document.getElementById('cancelPayment');

payNowButton.addEventListener('click', () => {
    confirmationPopup.style.display = 'block';
});

confirmPaymentButton.addEventListener('click', () => {
    // Handle confirmation logic here (e.g., redirect to payment gateway)
    confirmationPopup.style.display = 'none';
});

cancelPaymentButton.addEventListener('click', () => {
    confirmationPopup.style.display = 'none';
});
confirmPaymentButton.addEventListener('click', () => {
    // Handle confirmation logic here (e.g., redirect to payment gateway)
    confirmationPopup.style.display = 'none';

    // Navigate to a new page after confirmation
    window.location.href = 'dashboard.html'; // Replace with your desired URL
});