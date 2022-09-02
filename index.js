const dotenv = require('dotenv')
const cron = require('node-cron')
const { mantenerConexion } = require('./src/utils/conexionBD')
const app = require('./app.js')

dotenv.config()

cron.schedule('*/4 * * * * *', () => {
    console.log('Reviviendo conexion')
    mantenerConexion()
})

app.listen(3001, async () => {
    console.log('Corriendo por el puerto ' + 3001)
})
