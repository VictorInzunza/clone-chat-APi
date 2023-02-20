//* {
//*     error:false,
//*     status: 201,
//*     message:'User created Succesfully',
//*     data:{
//*         id: 5,
//*         firstName: 'Julio'
//*         ...
//*     }
//* }

//? Para respuestas exitosas
const success = ({status, data, message, res}) => {
    res.status(status).json({
        error:false,
        status,
        message,
        data
    })
}

//! Para respuestas de errores
const error = ({status, data, fields, message, res}) => {
    console.log(data)
    res.status(status).json({
        error:true,
        status,
        message,
        fields,
        data
    })
}

module.exports = {
    success,
    error
}