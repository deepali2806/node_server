const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON data
app.use(express.json());

// Define a route for handling POST requests
app.post('/submit', (req, res) => {
  // Handle the POST request here (e.g., save data to a database)
  const requestData = req.body; // Access the request data
  // Your logic goes here
    console.log('request data {}', requestData);
  // Send a response (optional)
  res.status(200).json({ message: 'POST request received successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
