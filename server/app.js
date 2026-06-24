'use strict'; // Enable strict mode for safer JavaScript

// Import the Express framework using CommonJS require; express is a function
const express = require('express');
const taskRoutes = require('./routes/taskRoutes'); // Import task routes
// Create an Express application instance which will hold routes and middleware
const app = express();

// Register Express's built-in JSON parser middleware so req.body contains parsed JSON
app.use(express.json());
app.use('/api', taskRoutes); // Mount task routes under the /api path
// Export the configured app so other modules (e.g., a server file or tests) can import it
module.exports = app; // CommonJS export of the Express application
