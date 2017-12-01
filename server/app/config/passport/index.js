const passport = require('passport')

const LocalStrategy = require('passport-local').Strategy
const jwtStrategy = require('./strategies/jwt')

const User = require('../../models/User')

passport.use( User.createStrategy() )
passport.use( jwtStrategy )

module.exports = passport