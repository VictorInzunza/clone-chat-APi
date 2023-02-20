const usersControllers = require('./users.controllers')
const responses = require('../utils/handleResponse')


const fields = {
  firstName : 'String',
  lastName : 'String',
  email: 'example@example.com',
  password: 'String',
  profileImage: 'example.com/image.png',
  phone : '+52 1234 123 123'
}

const getAllUsers = (req, res) => {
  usersControllers.findAllUsers()
    .then(data => 
      responses.success({
              status: 200,
              data: data,
              message: 'Getting all Users',
              res
      })
    )
    .catch(err => 
      responses.error({
          status: 400,
          data: err,
          message: 'Something bad getting all users',
          res
      })
    )
}

const getUserById = (req ,res) => {
  const id = req.params.id 
  usersControllers.findUserById(id)
    .then(data => data ?
      responses.success({
          status: 200,
          data,
          message: `Getting User with id: ${id}`,
          res
      })
    :
      responses.error({
          status: 404,
          message: `User with ID: ${id}, not found`,
          res
      })
    )
    .catch(err => 
      responses.error({
          status: 400,
          data: err,
          message: 'Something bad getting the user',
          res
      })
    )
}

const postUser = (req, res) => {
  const userObj = req.body
  console.log(req.body)
  usersControllers.createUser(userObj)
  .then(data => 
    responses.success({
      status: 201,
      data,
      message: `User created succesfully with id: ${data.id}`,
      res
    })
  )
  .catch(err => 
    responses.error({
      data: err,
      status: 400,
      message: 'Error ocurred trying to create a new user',
      res,
      fields
    })
  )
}

const patchUser = (req, res) => {
  const id = req.params.id 
  const userObj = req.body 

  usersControllers.updateUser(id, userObj)
    .then(data => data ?
      responses.success({
        status: 200,
        data, 
        message: `User with id: ${id} modified successfully`,
        res
      })
      :
      responses.error({
        status: 404,
        message: `The user with ID ${id} not found`,
        res,
        fields: {
          firstName : 'String',
          lastName : 'String',
          email: 'example@example.com',
          password: 'String',
          profileImage: 'example.com/image.png',
          phone : '+XX XXXX XXX XXXS'
        }
      })
    )
    .catch(err => 
      responses.error({
        status: 400,
        data: err,
        message: `Error ocurred trying to update user with id ${id}`,
        res,
        fields
      })
    )
}

const deleteUser = (req, res) => {
  const id = req.params.id 

  usersControllers.deleteUser(id)
    .then(data => data ?
      responses.success({
        status: 200,
        data, 
        message: `User with id: ${id} deleted successfully`,
        res
      })
    :
      responses.error({
        status: 404,
        data: err,
        message: `The user with ID ${id} not found`,
        res
      })
    )
    .catch(err => 
      responses.error({
        status: 400,
        data: err,
        message: `Error ocurred trying to delete user with id ${id}`,
        res
      })
    )
}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    patchUser,
    deleteUser
}