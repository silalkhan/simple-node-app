const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (like CSS)
app.use(express.static('public'));

// Route to serve the HTML login form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

// Route to handle form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Add your authentication logic here
  // For simplicity, let's just check if the username and password match
  if (username === 'admin' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.send('Invalid username or password');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
