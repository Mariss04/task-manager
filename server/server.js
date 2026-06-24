// server.js - Basic Express server (CommonJS)

// Create an Express application instance. This `app` is a function
// that can be passed to Node's HTTP server and has methods for
// defining routes and middleware.
const  app = require('./app'); // Import the configured Express app from app.js

// Port to listen on — set to 5000 as requested.
const port = 5000;


// Start the server: bind to the port and log when ready.
// app.listen creates an HTTP server and begins accepting requests.
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); 
});
