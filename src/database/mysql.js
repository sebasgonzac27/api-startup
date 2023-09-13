import mysql from 'mysql2/promise'
import config from '../../config.js'

const connection = await mysql.createConnection(config.mysql)

export default connection
