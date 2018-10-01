const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-parser")

// initialize express
const app = express()
const port = 4000


app.set("view engine", hbs)


app.use(require("./routes/index"))

app.listen(port, () => console.error(`port started on ${port}`))