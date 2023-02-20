const express = require( 'express' ) 
const db = require( './utils/database' )
const { api:{ host, port, nodeEnv } } = require( '../config' )
const resHandlers = require( './utils/handleResponse' )
const {referencesInit} = require( './models/index.models' )

const apiV1Router = require( './apiV1/apiV1.router' )

const app = express()

db.authenticate()
    .then( () => console.log('Las credenciales de la DB son correctas') )
    .catch( err => console.log(err) )

db.sync()
    .then( () => console.log('La base de datos ha sido actualizada') )
    .catch( err => console.log(err) )

referencesInit()

app.use( express.json() )

app.get( '/', (req, res) => {    
    resHandlers.success({
        res,
        status: 200,
        message: 'Servidor inicializado correctamente',
        data: {
            "conversations": "http://localhost:9000/api/v1/conversations",
            "messages": "http://localhost:9000/api/v1/messages",
            "participants": "http://localhost:9000/api/v1/participants",
            "users": "http://localhost:9000/api/v1/users",
        }
    })
})

app.use( '/api/v1', apiV1Router )

//*--------------------------------------------------------------------
//? The last Route on app
app.use( '*', (req, res) => {
    resHandlers.error({
        res,
        status: 404,
        message: `URL not found, please try with ${host}`,
    })
})
//*--------------------------------------------------------------------

app.listen( port, () => console.log( `
    Proyect Enviroment: ${nodeEnv},
    Server started at: ${host} 
`))