const bookingForm = document.getElementById('booking-form');

bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const number= document.getElementById('number').value;
    fetch('/book', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name:name,number:number  })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Handle the response from the backend
    })
    .catch(error => {
        console.error(error);
    });
});
const express = require('express');
const app = express();

app.use(express.json());

app.post('/book', (req, res) => {
    const { name, /* other data */ } = req.body;

    // Process the booking information and save it to the database or perform other actions

    res.json({ message: 'Booking successful' });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
function submitForm() {
    document.getElementById("myForm").submit();
}