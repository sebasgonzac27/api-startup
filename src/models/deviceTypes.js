import database from '../database/mysql.js'

export class DeviceTypesModel {
  static async getAll () {
    const deviceTypes = await database.query(
      'SELECT * FROM DeviceTypes ORDER BY ID;'
    )
    return deviceTypes
  }

  static async getById (id) {
    const deviceType = await database.query(
        `SELECT *
        FROM DeviceTypes
        WHERE ID = ?;`,
        [id]
    )
    return deviceType
  }

  static async create (data) {
    const { TypeName, ImageURL } = data
    const created = await database.query(
        `INSERT INTO DeviceTypes
        (TypeName, ImageURL)
        VALUES (?, ?);`,
        [TypeName, ImageURL]
    )
    return created
  }

  static async update (data, id) {
    const { TypeName, ImagenURL } = data
    const updated = await database.query(
        `UPDATE DeviceTypes
        SET TypeName = ?, ImageURL = ?
        WHERE ID = ?;`,
        [TypeName, ImagenURL, id]
    )
    return updated
  }

  static async delete (id) {
    const deleted = await database.query(
        `DELETE FROM DeviceTypes
        WHERE ID = ?;`,
        [id]
    )
    return deleted
  }
}
