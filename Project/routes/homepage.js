const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
   res.render(`main/homepage`)
})
router.get('/login', (req, res) => {
    // login page
    res.send('logging in page')
})
router.get('/logout', (req, res) => {
    // logout page
    res.send('logging out page')
})
module.exports = router;