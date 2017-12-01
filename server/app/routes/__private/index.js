const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')

const showPrivateData = require('./handlers/showPrivateData')

router.get('/private', passport.authenticate('jwt', { session: false }), showPrivateData)

module.exports = router