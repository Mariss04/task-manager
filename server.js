// server.js - Basic Express server (CommonJS)

// Import the Express framework (loads the module)
const express = require('express');

// Create an Express application instance. This `app` is a function
// that can be passed to Node's HTTP server and has methods for
// routing and middleware management.
const app = express();

// Register middleware to parse incoming JSON request bodies.
// This makes parsed JSON available on req.body for routes.
app.use(express.json());

// Port to listen on — set to 5000 as requested.
const port = 5000;

// Define a route handler for GET requests to the root path '/'.
// The handler receives a request (req) and response (res) object.
app.get('/', (req, res) => {
  // Send a plain-text response back to the client.
  res.send('Server is running...');
});

// Start the server: bind to the port and log when ready.
// app.listen creates an HTTP server and begins accepting requests.
app.listen(5000);
