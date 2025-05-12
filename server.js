// server.js
const express = require('express'); // Import the Express library
const app = express(); // Create an instance of an Express application
const PORT = process.env.PORT || 3000; // Define a port to listen on

// Middleware to parse JSON bodies
app.use(express.json()); // This allows your server to understand JSON sent from the frontend

// A simple test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from NutriWebApp Backend!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});