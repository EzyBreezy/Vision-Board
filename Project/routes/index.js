const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method

// index links all routes dictates path

// index is used to be the main router page.
// homepage.js routes /home < is beginning path
router.use('/', require('./homepage'))

// profilepage.js routes /profile < is the main page when user signs in
router.use('/profile', require('./profilepage'))

// login.js routes /login < is the login page when user needs to sign in
router.use('/login', require('./login'))

// signup.js routes /signup < is the signup page when user needs to signup
router.use('/signup', require('./signup'))



module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it