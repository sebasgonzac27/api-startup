import database from '../database/mysql.js'
import bcrypt from 'bcrypt'

export class UserModel {
  static async getAll () {
    const users = await database.query(
      `SELECT BIN_TO_UUID(ID) AS ID, FullName, Email, Password, Phone, Role
      FROM Users;`
    )
    return users
  }

  static async getById (id) {
    const user = await database.query(
      `SELECT BIN_TO_UUID(ID) AS ID, FullName, Email, Password, Phone, Role
      FROM Users
      WHERE ID = UUID_TO_BIN(?);`,
      [id]
    )
    return user
  }

  static async create (data) {
    const { FullName, Email, Password, Phone, Role } = data
    const [[{ ID }]] = await database.query('SELECT UUID() ID;')
    const result = await database.query(
      `INSERT INTO Users 
      VALUES (UUID_TO_BIN(?),?,?,?,?,?);`,
      [ID, FullName, Email, await bcrypt.hash(Password, 12), Phone, Role])
    return result
  }

  static async update (data, id) {
    const ID = id
    const { FullName, Email, Password, Phone, Role } = data
    const result = await database.query(
      `UPDATE Users
      SET FullName = ?, Email = ?, Password = ?, Phone = ?, Role = ?
      WHERE ID = UUID_TO_BIN(?);`,
      [FullName, Email, await bcrypt.hash(Password, 12), Phone, Role, ID]
    )
    return result
  }

  static async delete (id) {
    const ID = id
    const result = await database.query(
      `DELETE FROM Users
      WHERE ID = UUID_TO_BIN(?);`,
      [ID]
    )
    return result
  }
}
