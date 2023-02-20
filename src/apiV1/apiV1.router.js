const apiV1Router = require( 'express').Router()
const usersRouter = require( '../users/users.router' )
const authRouter = require( '../auth/auth.routers' )

apiV1Router.use( '/users', usersRouter )
apiV1Router.use( '/auth', authRouter )

module.exports = apiV1Router