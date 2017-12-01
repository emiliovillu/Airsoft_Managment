const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')

const registerUser = require('./handlers/registerUser')
const handleLogin = require('./handlers/handleLogin')
const getMyInfo = require('./handlers/getMyInfo')

router.post('/register', registerUser)
router.post('/login', passport.authenticate('local', { session: false }), handleLogin)
router.get('/me', passport.authenticate('jwt', { session: false }), getMyInfo)

module.exports = router