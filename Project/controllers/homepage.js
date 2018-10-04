module.exports = {
    index: (req, res) => { // express.Router.get('browser path, (Server Request, Server Response))
        // home page
        res.render(`main/homepage`) // path to hbs
    }
    
}