const express = require('express')
const router = express.Router()


const getPlayers = require('../Player/handler/getPlayers')
const getMemberInTeamById = require('../Player/handler/getMemberInTeamById')


router.get('/api/teams/:teamID/members/:memberID', getMemberInTeamById)
router.get('/api/players/:id', getPlayers)

module.exports = router