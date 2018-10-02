const express = require(`express`)
const hbs = require(`hbs`)
const bodyParser = require(`body-parser`)

// initialize express
const app = express()
// port to listen on
const port = 4000

//setup views engine
app.set(`view engine`, `hbs`)

// route to use
app.use(require(`./routes/index`))

// listen to the server on port
app.listen(port, () => console.log(`port started on ${port}`))