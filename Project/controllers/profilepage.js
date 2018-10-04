const Goals = require("../models/Goals")


module.exports = {
    main: (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // profile page
        res.render(`profile/profilepage`)
    },
    show: (req, res) => {
        Goal.find({ })
        .exec( (err, goal) => {
            Comment.populate(goal.comments, { path: " goal "}, function(err, comments) {
                goal.comments = comments;
                console.log(goals);
                res.render("goals/show", goals)
            })
        })
    },

    makePost: (req, res) => {
        Goals.create({
            content: req.body.goals.content,
        })
    }
}