const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method

// signup.js

// path is signup page
router.get('/', (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // signup page
    res.render(`main/signup`) // path to hbs
})










module.exports = router; 
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it