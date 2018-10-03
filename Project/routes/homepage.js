const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method

//homepage.js

// path is home/login
router.get('/', (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // home page
    res.render(`main/homepage`) // path to hbs
})








module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it