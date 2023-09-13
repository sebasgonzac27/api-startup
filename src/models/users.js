import database from '../database/mysql.js'

export class UserModel {
  static async getAll () {
    const users = await database.query(
      `SELECT BIN_TO_UUID(ID) AS ID, FullName, Email, Username, Password, Phone, Role
      FROM Users;`
    )
    return users
  }

  static async getById (id) {
    const user = await database.query(
      `SELECT BIN_TO_UUID(ID) AS ID, FullName, Email, Username, Password, Phone, Role
      FROM Users
      WHERE ID = UUID_TO_BIN(?)`,
      [id]
    )
    return user
  }

  static async addUser (data) {
    const { FullName, Email, Username, Password, Phone, Role } = data
    const [ID] = await database.query('SELECT UUID() id FROM Users;')
    const result = await database.query(
      `INSERT INTO Users 
      VALUES (?,?,?,?,?,?,?)`,
      [ID, FullName, Email, Username, Password, Phone, Role])
    return result
  }
}
