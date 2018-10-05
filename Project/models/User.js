const mongoose = require(`../db/connection`); // route to db/connection to connect
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: String,
  firstName: String,
  lastName: String,
  email: String,
  goals: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

// ref twitter app
// User.methods.encrypt = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };

// User.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.local.password);
// };

module.exports = mongoose.model(`User`, UserSchema);
