// Import the Express framework to create routes.
const express = require('express');

// Create a router instance to define routes.
const router = express.Router();

// Define a GET route for /tasks that responds with an empty array.
router.get('/tasks', (req, res) => {
  // Send a JSON response containing an empty array.
  res.json([]);
});

// Export the router so it can be used in other files.
module.exports = router;
