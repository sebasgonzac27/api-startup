import database from '../database/mysql.js'

export class LoginModel {
  static async find (email) {
    const user = await database.query(
        `SELECT BIN_TO_UUID(ID) AS ID, FullName, Email, Password, Phone, Role
        FROM Users
        WHERE email = ?;`,
        [email]
    )
    return user
  }
}
