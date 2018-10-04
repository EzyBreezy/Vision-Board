const express = require('express'); // requires the express module
const router = express.Router(); // initializes the express with Router method
const Goals = require('../models/Goals')
//goals.js

// 
router.get('/', (req, res) => {
    // 
    res.render(`goals/new`)
})


// path is home/login
router.post('/new', (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // home page
    Goals.create({
        
    })
})


// show post of goals
router.get("/:id", (req, res) => {
    // Goals.findOne({ _id: req.params.id })
    //     .populate(    'something' )
    //     .then(post => {
    //         res.render("post/show", post )
    //     })
})


// update post of goals
router.put("/:id", (req, res) => {

})

router.delete('/:id', (req, res) => {
    res.redirect('/')
})





module.exports = router;
// module.exports = router is allowing everything that 
// is router to be exported to be used in other file's 
// that require it