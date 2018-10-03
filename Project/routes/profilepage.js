const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method

// profilepage.js

// main page route
router.get('/', (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // profile page
    res.render(`profile/profilepage`)
})










module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it