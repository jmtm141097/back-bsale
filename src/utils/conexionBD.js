const mysql = require('mysql2')
const dotenv = require('dotenv')
dotenv.config()

const connection = mysql.createConnection({
    host: 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
    user: 'bsale_test',
    password: 'bsale_test',
    database: 'bsale_test'
})

const mantenerConexion = () => {
    connection.query(`${"SELECT 'KEEP_ALIVE'"}`)
}

module.exports = {
    connection,
    mantenerConexion
}
