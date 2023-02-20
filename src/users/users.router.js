const usersServices = require( './users.services' )
const routerUsers = require( 'express' ).Router()

routerUsers.get('/', usersServices.getAllUsers)
routerUsers.post('/', usersServices.postUser)

routerUsers.get('/:id', usersServices.getUserById)
routerUsers.patch('/:id', usersServices.patchUser)
routerUsers.delete('/:id', usersServices.deleteUser)

module.exports = routerUsers