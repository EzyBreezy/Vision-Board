const express = require("express"); // requires the express module
const router = express.Router(); // initializes the express with Router method
const Goals = require("../models/Goals");
//goals.js

router.get("/goal", (req, res) => {
    Goals.find({}).then(allGoals =>{
        res.render(`goals/index`, {allGoals})
    })
})

// new
router.get("/goal/new", (req, res) => {
  //
  res.render(`goals/new`);
});

//create
router.post("/goal", (req, res) => {
    // express.Router.get('browser path, (Server Request, Server Response))
    // home p
    Goals.create({
        title: req.body.title, // requires body data
        img: req.body.img
    }).then(goal => {
        res.redirect("/goal");
    });
});

// show post of goals
router.get("/goal/:id", (req, res) => {
    Goals.findOne({ _id: req.params.id })
    .then(goal => {
        res.render('goals/show', {goal})
    })
});


//edit route
router.get("/goal/:id/edit", (req, res) => {

})


// update post of goals
router.put("/goal/:id", (req, res) => {

});

// delete
router.delete("/goal/:id", (req, res) => {
    res.redirect("/");
});

module.exports = router;
// module.exports = router is allowing everything that
// is router to be exported to be used in other file's
// that require it
