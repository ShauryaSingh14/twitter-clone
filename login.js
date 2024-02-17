// const express = require('express');
// const bodyParser = require('body-parser');
// const path = require('path');

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'login.html'));
// });

// app.post('/login', (req, res) => {
//   const username = req.body.username;
//   const password = req.body.password;

//   if (username && password) {
//     if (username === 'admin' && password === 'password') {
//       res.redirect('/index.html');
//     } else {
//       res.send('Invalid username or password');
//     }
//   } else {
//     res.send('Please enter username and password');
//   }
// });

// const PORT = process.env.PORT || 3000;

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });



    



// const express = require('express');
// const app = express(); // Create an ExpressJS app
// const bodyParser = require('body-parser'); // middleware
// app.use(bodyParser.urlencoded({ extended: false }));

// // Hardcoded username and password
// const hardcodedUsername = 'user';
// const hardcodedPassword = 'password';

// // Route to Homepage
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/login.html');
// });

// // Route to Login Page
// app.get('/home', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });
  
// app.post('/', (req, res) => {
//     const loginForm = document.querySelector('button');

//     // Add event listener for form submission
//     loginForm.addEventListener('click', function(event) {
//         // Prevent the default form submission behavior
//         event.preventDefault();

//         // Fetch the values of username and password fields
//         var username = document.getElementById('username').value;
//         var password = document.getElementById('password').value;

//         // // Output the username and password (you can perform further operations here)
//         // console.log('Username:', username);
//         // console.log('Password:', password);

//     });


//     // Check if the provided credentials match the hardcoded ones
//     if (username === hardcodedUsername && password === hardcodedPassword) {
//         // Redirect to the home page if login is successful
//         return res.sendFile(__dirname + 'index.html'); // Make sure to return here
//     } else {
//         // If credentials are incorrect, send an error response
//         res.status(401).send('Invalid username or password');
//     }
// });

// const port = 3000; // Port we will listen on

// // Function to listen on the port
// app.listen(port, () => console.log(`This app is listening on port ${port}`));


const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Middleware setup
app.use(bodyParser.urlencoded({ extended: false }));

// Hardcoded username and password
const hardcodedUsername = 'user';
const hardcodedPassword = 'password';

// Route to Homepage
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Route to Login Page
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
  
// POST route for handling login form submission
app.post('/', (req, res) => {
    const { username, password } = req.body;

    // Check if the provided credentials match the hardcoded ones
    if (username === hardcodedUsername && password === hardcodedPassword) {
        // Redirect to the home page if login is successful
        res.redirect('/home');
        
    } else {
        // If credentials are incorrect, send an error response
        res.status(401).send('Invalid username or password');
    }
});

// Port configuration
const port = 3000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
