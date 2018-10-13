const express = require("express"); // requires the express module
const router = express.Router(); // initializes the express with Router method
const Goals = require("../models/Goals");
const Comment = require("../models/Comment")

//goals.js

// gets the Goal view that renders all goals
router.get("/goal", (req, res) => {
    Goals.find({}).then(allGoals =>{
        res.render(`goals/index`, {allGoals})
    })
})


// new
router.get("/goal/new", (req, res) => {
  //
  res.render(`goals/new`);
})


//create
router.post("/goal", (req, res) => {
    // express.Router.get('browser path, (Server Request, Server Response))
    // home p
    Goals.create({
        title: req.body.title, // request body title
        img: req.body.img // request img title
    }).then(goal => {
        res.redirect("/goal");
    })
    .catch(err => {
        console.log(err)
    })
});


// show post of goals
router.get("/goal/:id", (req, res) => {
    Goals.findOne({ _id: req.params.id })
    .then(goal => {
        res.render('goals/show', {goal})
    })
    .catch(err => {
        console.error(err)
    })
});



//edit routed
router.get("/goal/:id/edit", (req, res) => {
    Goals.findById(req.params.id)
    .then(goal => {
        res.render('goals/edit', {goal})
    })
    .catch(err => {
        console.error(err)
    })
})


// update post of goals
router.put("/goal/:id", (req, res) => {
    Goals.findByIdAndUpdate(req.params.id, {
        title: req.body.title, 
        img: req.body.img
    })
    .then(goal => {
        res.redirect(`/goal/${req.params.id}`)
    })

});

// destroy
router.delete("/goal/:id", (req, res) => {
    Goals.findOneAndDelete({_id: req.params.id})
    .then(goal => {
        res.redirect(`/goal`);
    })
});

module.exports = router;
// module.exports = router is allowing everything that
// is router to be exported to be used in other file's
// that require it
