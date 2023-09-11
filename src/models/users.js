import database from '../database/mysql.js'

export class UserModel {
  static async getAll () {
    const users = await database.query(
      `SELECT BIN_TO_UUID(ID) AS ID, FullName, Email, Username, Password, Phone, Role
      FROM Users;`
    )
    return users
  }
}
