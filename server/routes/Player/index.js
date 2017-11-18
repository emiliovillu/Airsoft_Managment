const express = require('express')
const router = express.Router()


const getPlayer = require('../Player/handler/getPlayer')




router.get('/api/player/:id', getPlayer)

module.exports = router