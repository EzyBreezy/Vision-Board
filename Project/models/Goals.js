const mongoose = require(`../db/connection`) // route to db/connection to connect
const Schema = mongoose.Schema; 

var GoalSchema = new Schema({
    Title: String,
    Comment: String,
    Images: String, // update this when you figure out.
    Cost: Number
    // Percent_To_Goal: Number, update this when you figure it out.
    // Graphical_Overlay: Number, 
})


module.exports = mongoose.model(`Goal`, GoalSchema)