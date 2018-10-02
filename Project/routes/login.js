const express = require('express');
const router = express.Router();

// login.js

// path is login page
router.get('/', (req, res) => {
    // login page
    res.render(`main/login`)
})

module.exports = router;