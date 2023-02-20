const {DataTypes} = require( 'sequelize' )
const db = require( '../utils/database' )

const Messages = db.define( "messages", {
    id:{
        type:DataTypes.UUID,
        primaryKey: true
    },
    participantId:{
        type:DataTypes.UUID,
    },
    content:{
        type: DataTypes.TEXT,
        allowNull: false
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:'sended'
    }
} )

module.exports = Messages