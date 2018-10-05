const express = require(`express`)
const hbs = require(`hbs`)
const bodyParser = require(`body-parser`)
const methodOverride = require('method-override')

// initialize express
const app = express()
// port to listen on
const port = 4000


app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true}))
//setup views engine
app.set(`view engine`, `hbs`)
// css styleshit linking __dirname is the current directory public is the folder
app.use(express.static( __dirname + '/public'))

// route to use
app.use(require(`./routes/goals`))
app.use(require(`./routes/homepage`))


// listen to the server on port
app.listen(port, () => console.log(`port started on localhost:${port}, Options are /, profile, login, signup`))


//what is __dirname
// __dirname is the current directory