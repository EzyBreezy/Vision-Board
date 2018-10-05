
const mongoose = require(`../db/connection`) // route to db/connection to connect
const Schema = mongoose.Schema; 

const Goal = new Schema({
    title: String,
    img: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
    ]
})


module.exports = mongoose.model("Goal", Goal)