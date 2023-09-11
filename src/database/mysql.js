import mysql from 'mysql2/promise'
import config from '../../config.js'

console.log(config)

const connection = await mysql.createConnection(config.mysql)

export default connection
