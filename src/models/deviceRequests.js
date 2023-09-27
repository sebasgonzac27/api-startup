import database from '../database/mysql.js'

export class DeviceRequestsModel {
  static async getAll () {
    const devicerequests = await database.query(
        `SELECT *
        FROM devicesrequests
        ORDER BY ID;`
    )
    return devicerequests
  }

  static async getById (id) {
    const devicerequests = await database.query(
        `SELECT *
        FROM devicesrequests
        WHERE ID = ?;`,
        [id]
    )
    return devicerequests
  }

  static async create (data) {
    const {
      RequestID,
      DeviceID
    } = data
    const created = await database.query(
        `INSERT INTO devicesrequests
        (   RequestID,
            DeviceID)
        VALUES (?, ?);`,
        [RequestID, DeviceID]
    )
    return created
  }

  static async update (data, id) {
    const {
        RequestID,
        DeviceID
    } = data
    const updated = await database.query(
        `UPDATE devicesrequests
        SET RequestID = ?, DeviceID = ?
        WHERE ID = ?;`,
        [RequestID, DeviceID, id]
    )
    return updated
  }

  static async delete (id) {
    const deleted = await database.query(
        `DELETE FROM devicesrequests
        WHERE ID = ?;`,
        [id]
    )
    return deleted
  }
}
