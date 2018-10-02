const express = require('express');
const router = express.Router();


// homepage.js routes /home < is beginning path
router.use('/home', require('./homepage'))
// profilepage.js routes /profile < is the main page when user signs in
router.use('/profile', require('./profilepage'))

module.exports = router;