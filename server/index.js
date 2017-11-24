require('dotenv').load()
const {PORT, URL_DB} = process.env

global.__base = __dirname

const app = require('../server/app')
const db = require('./config/db')

db.openUri(URL_DB)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}...`)














// const express = require('express')
// const app = express()
// const cors = require('cors')
// const dotenv = require('dotenv').load()
// const {PORT} = process.env

// const getTeam = require('../server/hanlder/getTeam')
// const getMembers = require('../server/hanlder/getMembers')
// const getTeamById = require('../server/hanlder/getTeamById')
// app.use(cors())

// app.use(express.static('public'))

// app.get('/api/teams', getTeam)
// app.get('/api/teams/:id', getTeamById)
// app.get('/api/team/members', getMembers)


// app.listen(PORT)
// console.log(`Listening on PORT ${PORT}...`)

