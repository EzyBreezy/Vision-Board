const User = require("../models/User")

module.exports = {
    // landing page
    index: (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
    // signup page
    res.render(`main/signup`) // path to hbs
    },  



}