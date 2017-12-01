const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')

const getTeam = require('../Team/handler/getTeam')
const addTeam = require('../Team/handler/addTeam')
const getTeamById = require('../Team/handler/getTeamById')
const removeTeamById = require('../Team/handler/removeTeamById')
const editTeam = require('../Team/handler/editTeam')


router.get('/teams', getTeam) // get all teams
router.post('/teams', passport.authenticate('jwt', { session: false }), addTeam) // add new team

router.get('/team/:id', getTeamById) // get team details
router.delete('/team/:id', passport.authenticate('jwt', { session: false }), removeTeamById) // remove team
router.put('/team/:id', passport.authenticate('jwt', { session: false }), editTeam)  // edit team


/*
-- app.js --
app.use('/api',routesTeams)

-------------


*/




// const passport = require('../../config/passport')
// const getTeamById = require('../Team/handler/getTeamById')
// const getPlayerById = require('../Player/handler/getPlayerById')
// router.get('/team/:id', getTeamById)
// router.get('/player/:id', getPlayerById)


module.exports = router