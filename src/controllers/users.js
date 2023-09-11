import mysql from 'mysql2/promise'

const DEFAULT_CONFIG = {
  host: 'localhost',
  user: 'root',
  port: '3306',
  password: 'admin123',
  database: 'University'
}

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG

const connection = await mysql.createConnection(connectionString)

export class UsersController {
  static async getAll (req, res) {
    const [users] = await connection.query(
      'SELECT * FROM Users'
    )
    return users
  }
}
