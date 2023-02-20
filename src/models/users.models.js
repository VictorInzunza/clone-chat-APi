const {DataTypes} = require( 'sequelize' )
const db = require( '../utils/database' )

const Users = db.define( "users", {
    id:{
        type:DataTypes.UUID,
        primaryKey: true
    },
    profileImage:{
        type:DataTypes.STRING
    },
    firstName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName:{
        type: DataTypes.STRING,
        allowNull: false
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false
    },
    state:{
        type:DataTypes.BOOLEAN,
        defaultValue:true
    }
} )

module.exports = Users