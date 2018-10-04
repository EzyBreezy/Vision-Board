const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method

// index links all routes dictates path

// index is used to be the main router page.
// homepage.js routes /home < is beginning path
router.use('/', require('./homepage'))

// profilepage.js routes /profile < is the main page when user signs in
router.use('/profile', require('./profilepage'))

// login.js routes /login < is the login page when user needs to sign in
router.use('/login', require('./login'))

// signup.js routes /signup < is the signup page when user needs to signup
router.use('/signup', require('./signup'))

// goals.js routes /goals < is the post page when user needs to post
router.use('/goals', require('./goals'))



// 404 route any route that isnt defined will be a 404 page last thing to work on.
router.get('*', (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // home page
    res.send(`404 Page`) // path to hbs
})


module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it