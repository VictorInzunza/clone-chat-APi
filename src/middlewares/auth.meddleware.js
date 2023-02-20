const { ExtractJwt, Strategy } = require('passport-jwt')
const passport = require('passport')
require('dotenv').config()

const { findUserById } = require('../users/users.controllers')

const passportConfigs = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken,
    secretOrKey: process.env.API_KEY
}

passport.use(new Strategy(passportConfigs, (tokenDecoded, done) => {
    findUserById(tokenDecoded.id)
        .then(data => data ?
            done(null, tokenDecoded)
            :
            done(null, false)
        )
        .catch(err => done(err, false))
}))

module.exports = passport