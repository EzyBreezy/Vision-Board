const mongoose = require(`../db/connection`) // route to db/connection to connect
const Schema = mongoose.Schema; 


const CommentSchema = new Schema({
    content: String,
    createdAt: {
      type: Date,
      default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
});


module.exports = {
    Comment: mongoose.model("Comment", CommentSchema)
};