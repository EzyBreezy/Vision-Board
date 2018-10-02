const express = require('express');
const router = express.Router();


// homepage.js
router.use('/home', require('./homepage'))

module.exports = router;