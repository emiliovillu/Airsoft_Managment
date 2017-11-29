const express = require('express')
const router = express.Router()

const passport = require('../../config/passport')

const registerUser = require('./handlers/registerUser')
const handleLogin = require('./handlers/handleLogin')

router.post('/register', registerUser)
router.post('/login', passport.authenticate('local', { session: false }), handleLogin)

module.exports = router