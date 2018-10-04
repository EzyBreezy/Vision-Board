const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method

// profilepage.js

// main page route
router.get('/', (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // profile page
    res.render(`profile/profilepage`)
})


// router.post('/', (req, res) => {
//     // post a image url

// })

// router.get('/:id', (req, res) => {
//     // show
//     res.render(`main/homepage`)
// })








module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it