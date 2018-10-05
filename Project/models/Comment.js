const mongoose = require(`../db/connection`)
const Schema = mongoose.Schema;


const Comment = new Schema({
    content: String,
    createdAt: {
      type: Date,
      default: Date.now()
    },
    goal: { 
    type: Schema.Types.ObjectId,
    ref: "Goal"
    }
});

module.exports = mongoose.model("Comment", Comment)