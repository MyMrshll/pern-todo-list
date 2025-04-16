const {Pool} = require('pg');

const pool = new Pool({
    user: process.env.USER_DB,
    host: process.env.HOST_DB,
    database: process.env.DB_NAME,
    password: process.env.PASSWORD_DB,
    port: process.env.DB_PORT,
}) 


module.exports = pool;