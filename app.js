'use strict'; // Enable strict mode for safer JavaScript

// Import the Express framework using CommonJS require; express is a function
const express = require('express');

// Create an Express application instance which will hold routes and middleware
const app = express();

// Register Express's built-in JSON parser middleware so req.body contains parsed JSON
app.use(express.json());

// Export the configured app so other modules (e.g., a server file or tests) can import it
module.exports = app; // CommonJS export of the Express application
