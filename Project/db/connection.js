const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/goals", { useNewUrlParser: true });
mongoose.Promise = Promise;
module.exports = mongoose;
