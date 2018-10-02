const express = require('express');
const router = express.Router();

// profilepage.js

// main page route
router.get('/', (req, res) => {
    // profile page
    res.render(`profile/profilepage`)
})

module.exports = router;