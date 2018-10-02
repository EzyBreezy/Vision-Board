const express = require('express');
const router = express.Router();

// signup.js

// path is signup page
router.get('/', (req, res) => {
    // signup page
    res.render(`main/signup`) // path to hbs
})



module.exports = router;