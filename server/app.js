const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// const passport = require('./config/passport')

const routesTeam = require('./routes/Team')



const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( cors() )

// app.use( passport.initialize() )

app.use(routesTeam)



module.exports = app