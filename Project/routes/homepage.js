const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method
const homepageController = require(`../controllers/homepage`)

//homepage.js

// path is home page for hbs templete
router.get('/', homepageController.index)




// landing page



module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it