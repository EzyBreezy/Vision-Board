const express = require('express');
const router = express.Router();

//homepage.js

// path is home/login
router.get('/', (req, res) => {
    // home page
    res.render(`main/homepage`) // path to hbs
})

module.exports = router;