const express = require('express');
const router = express.Router();

//homepage.js

// path is home/login
router.get('/', (req, res) => {
    // 
   res.render(`main/homepage`)
})

module.exports = router;