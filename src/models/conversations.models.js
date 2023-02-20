const {DataTypes} = require( 'sequelize' )
const db = require( '../utils/database' )

const Conversations = db.define( "conversations", {
    id:{
        type:DataTypes.UUID,
        primaryKey: true
    },
    createdBy:{
        type: DataTypes.UUID,
        allowNull: false,
    },
    profileImage:{
        type:DataTypes.STRING,
        defaultValue: "https://image-exmple.com/img.jpg"
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    isGroup:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
} )

module.exports = Conversations