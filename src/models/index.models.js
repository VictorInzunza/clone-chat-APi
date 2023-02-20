const Conversations = require( './conversations.models' )
const Messages = require( './messages.models' )
const Participants = require( './participants.models' )
const Users = require( './Users.models' )

const referencesInit = () => {

    // Users.hasMany( Conversations, {foreignKey: 'createdBy', sourceKey:'id'} )
    // Conversations.belongsTo( Users, {foreignKey: 'createdBy', targetKey:'id'} )

    Users.hasMany( Participants, {foreignKey: 'userId', sourceKey:'id'} )
    Participants.belongsTo( Users, {foreignKey: 'userId', targetKey:'id'} )

    Conversations.hasMany( Participants, {foreignKey: 'conversationId', sourceKey:'id'} )
    Participants.belongsTo( Conversations, {foreignKey: 'conversationId', targetKey:'id'} )

    Participants.hasMany( Messages, {foreignKey: 'participantId', sourceKey:'id'} )
    Messages.belongsTo( Participants, {foreignKey: 'participantId', targetKey:'id'} )

}

module.exports = {
    Conversations,
    Messages,
    Participants,
    Users,
    referencesInit
}