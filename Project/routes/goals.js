const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method
const Goals = require('../models/Goals')
//homepage.js

router.get('/', (req, res) => {
    res.render(`goals/new`)
})

// path is home/login
router.post('/new', (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // home page
    Goals.create({
        
    })
})








module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it