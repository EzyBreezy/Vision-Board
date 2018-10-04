
const mongoose = require(`../db/connection`) // route to db/connection to connect
const Schema = mongoose.Schema; 

const CommentSchema = new Schema({
    content: String,
    createdAt: {
      type: Date,
      default: Date.now()
    }
});

const GoalSchema = new Schema({
    title: String,
    img: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    comments: [CommentSchema]
})


module.exports = {
    Comment: mongoose.model("Comment", CommentSchema),
    Goal: mongoose.model("Goal", GoalSchema)
}