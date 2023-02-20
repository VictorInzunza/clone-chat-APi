require( 'dotenv' ).config()

const configs = {
    api:{
        port: process.env.PORT || 3000,
        host: `${process.env.HOST}${process.env.PORT||'3000'}`,
        nodeEnv: process.env.NODE_ENV || 'development'
    },
    db:{
        dialect: process.env.DB_DIALECT || 'postgres',
        port: process.env.DB_PORT || 5432,
        host: process.env.DB_HOST || `localhost`,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        define:{
            timestamps:true, //? created_At && updated_at
            underscored: true, //? Convierte camelCase en snake_case
            underscoredAll: true
        }
    }
}

module.exports = configs