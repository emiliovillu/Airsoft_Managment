const express = require('express')
const router = express.Router()

const getTeam = require('../Team/handler/getTeam')
const addTeam = require('../Team/handler/addTeam')
const getTeamById = require('../Team/handler/getTeamById')



router.get('/api/team', getTeam)
router.get('/api/team/:id', getTeamById)
router.post('/api/addteam', addTeam)




// const passport = require('../../config/passport')
// const getTeamById = require('../Team/handler/getTeamById')
// const getPlayerById = require('../Player/handler/getPlayerById')
// router.get('/team/:id', getTeamById)
// router.get('/player/:id', getPlayerById)


module.exports = router