const checkUserCredentials  = require( './auth.controller' )
const {error, success} = require( '../utils/handleResponse' )
const jwt = require( 'jsonwebtoken' )

const postLogin = ( req, res ) => {
    const { email, password} = req.body
    checkUserCredentials( email, password )
        .then( data => data ?
            success({
                res,
                status: 200,
                data: jwt.sign({
                    id: data.id,
                    email: data.email,
                    firstName: data.firstName
                }, process.env.API_KEY),
                message: 'Correct Credentials'
            })
            :
            error({
                res,
                status: 401,
                message: 'Invalid Credentials'
            })
        )
        .catch( err => error({
            res,
            status: 400,
            data: err,
            message: 'Something Bad'
        }))
}

module.exports = postLogin