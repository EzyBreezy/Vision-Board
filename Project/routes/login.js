const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method

// login.js

// path is login page
router.get('/', (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // login page
    res.render(`main/login`)
})










module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it