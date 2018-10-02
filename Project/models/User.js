const mongoose = require(`../db/connection`) // route to db/connection to connect
const Schema = mongoose.Schema; 

var UserSchema = new Schema({
    Username: String,
    Password: String
})


module.exports = mongoose.model(`User`, UserSchema)