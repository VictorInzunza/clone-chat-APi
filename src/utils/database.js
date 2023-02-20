const {Sequelize} = require( 'sequelize' )
const configs = require( '../../config' )

const db = new Sequelize( configs.db )

module.exports = db