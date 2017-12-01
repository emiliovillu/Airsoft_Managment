// mongoexport --db test --collection traffic --out traffic.json
// mongoimport -h ds012345.mlab.com:56789 -d dbname -c collectionname -u dbuser -p dbpassword --file filename.json
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const passport = require('./config/passport')

const routesAuth = require('./routes/auth')
const routesTeam = require('./routes/Team')
const routesPlayer = require('./routes/Player')
const routesUploadImg = require('./routes/UploadImg')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use( cors() )
app.use(express.static('public'))

app.use( passport.initialize() )

app.use(routesAuth)
app.use('/api', routesTeam)
app.use(routesPlayer)
app.use(routesUploadImg)


module.exports = app