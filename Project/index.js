const express = require(`express`)
const hbs = require(`hbs`)
const bodyParser = require(`body-parser`)

// initialize express
const app = express()
// port to listen on
const port = 4000



//setup views engine
app.set(`view engine`, `hbs`)
// css styleshit linking __dirname is the current directory public is the folder
app.use(express.static( __dirname + '/public'))

// route to use
app.use(require(`./routes/index`))

// listen to the server on port
app.listen(port, () => console.log(`port started on localhost:${port}, Options are /, profile, login, signup`))


//what is __dirname
// __dirname is the current directory