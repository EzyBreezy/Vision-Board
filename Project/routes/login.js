const express = require('express');
const router = express.Router();

// login

router.get('/login', (req, res) => {
    // login page
    res.render(`main/login`)
})

router.get('/logout', (req, res) => {
    // logout page
    res.get(`main/logout`)
})



module.exports = router;