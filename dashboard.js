const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  
  res.sendFile('index.html', { root: __dirname });
});

// API endpoints (if needed)
app.get('/api/data', (req, res) => {
  // Retrieve data from the database
  // ...
  res.json(data);
});

app.post('/api/data', (req, res) => {
  // Create new data in the database
  // ...
  res.json(new_data);
});

// ... other API endpoints

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const popupTrigger = document.querySelector('.popup-trigger');
    const popup = document.querySelector('.popup');
    const closeButton = document.querySelector('.close-button');

    popupTrigger.addEventListener('click', () => {
        popup.style.display = 'block';
    });

    closeButton.addEventListener('click', () => {
        popup.style.display = 'none';
    });