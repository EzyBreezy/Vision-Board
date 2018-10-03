const mongoose = require(`../db/connection`) // route to db/connection to connect
const Schema = mongoose.Schema; 


const GoalSchema = new Schema({
    title: String,
    comment: String,
    img: String,
    //cost: String,
    //Images: String, // update this when you figure out
    // Percent_To_Goal: Number, update this when you figure it out.
    // Graphical_Overlay: Number, 
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})


module.exports = mongoose.model(`Goal`, GoalSchema)