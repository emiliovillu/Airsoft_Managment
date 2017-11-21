const express = require('express')
const router = express.Router()


const getPlayers = require('../Player/handler/getPlayers')
const getMemberInTeamById = require('../Player/handler/getMemberInTeamById')
const addPlayerById = require('../Player/handler/addPlayerById')

router.get('/api/teams/:teamID/members/:memberID', getMemberInTeamById)
router.get('/api/players/:id', getPlayers)
router.post('/api/team/:id/addplayer', addPlayerById)

module.exports = router