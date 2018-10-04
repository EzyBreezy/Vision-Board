const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method
const signupController = require(`../controllers/signup`)

// signup.js

// path is signup page
router.get('/', signupController.signUp)
// path is signup post
router.post('/', signupController.createSignUp)

// on signup page they need to create a user model








module.exports = router; 
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it