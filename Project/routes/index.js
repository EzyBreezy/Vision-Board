const express = require('express');
const router = express.Router();

// index

// index is used to be the main router page.
// homepage.js routes /home < is beginning path
router.use('/home', require('./homepage'))

// profilepage.js routes /profile < is the main page when user signs in
router.use('/profile', require('./profilepage'))

// login.js routes /login < is the login page when user needs to sign in
router.use('/login', require('./login'))

module.exports = router;