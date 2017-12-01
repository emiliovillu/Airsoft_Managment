const express = require('express')
const router = express.Router()


const getPlayers = require('../Player/handler/getPlayers')
const getMemberInTeamById = require('../Player/handler/getMemberInTeamById')
const addPlayerById = require('../Player/handler/addPlayerById')
const removeMemberInTeamById = require('../Player/handler/removeMemberInTeamById')
const editPlayerById = require('../Player/handler/editPlayerById')
const addStatsPlayerById = require('../Player/handler/addStatsPlayerById')

router.get('/api/teams/:teamID/members/:memberID', getMemberInTeamById)
router.get('/api/players/:id', getPlayers)
router.post('/api/team/:id/addplayer', addPlayerById)
router.post('/api/teams/:teamID/members/:memberID', removeMemberInTeamById)
router.post('/api/teams/:teamID/members/:memberID/editplayer', editPlayerById)
router.post('/api/teams/:teamID/members/:memberID/addstatsplayer', addStatsPlayerById)

module.exports = router