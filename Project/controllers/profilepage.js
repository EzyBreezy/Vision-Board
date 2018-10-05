// const Goals = require("../models/Goals")


// module.exports = {
//     main: (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
//     // profile page
//         Goals.find({}).then(allGoals =>{
//             res.render(`/goals/`, {allGoals})
//         })
//     },
//     show: (req, res) => {v // shows 1 post
//         Goal.find({ })
//         .exec( (err, goal) => {
//             Comment.populate(goal.comments, { path: " goal "}, function(err, comments) {
//                 goal.comments = comments;
//                 console.log(goals);
//                 res.render("goals/show", goals)
//             })
//         })
//     },

//     makePost: (req, res) => { //creates 1 post
//         Goals.create({
//             content: req.body.goals.content,
//         })
//     }
// }