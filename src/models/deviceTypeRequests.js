import database from '../database/mysql.js'

export class DeviceTypeRequestsModel {
  static async getAll () {
    const devicetyperequests = await database.query(
        `SELECT *
        FROM devicetyperequests
        ORDER BY ID;`
    )
    return devicetyperequests
  }

  static async getById (id) {
    const devicetyperequests = await database.query(
        `SELECT *
        FROM devicetyperequests
        WHERE ID = ?;`,
        [id]
    )
    return devicetyperequests
  }

  static async create (data) {
    const {
      RequestID,
      DeviceTypeID,
      Device
    } = data
    const created = await database.query(
        `INSERT INTO devicetyperequests
        (   RequestID,
            DeviceTypeID,
            Device)
        VALUES (?, ?, ?);`,
        [RequestID, DeviceTypeID, Device]
    )
    return created
  }

  static async update (data, id) {
    const {
      RequestID,
      DeviceTypeID,
      Device
    } = data
    const updated = await database.query(
        `UPDATE devicetyperequests
        SET RequestID = ?, DeviceTypeID = ?, Device = ?
        WHERE ID = ?;`,
        [RequestID, DeviceTypeID, Device, id]
    )
    return updated
  }

  static async delete (id) {
    const deleted = await database.query(
        `DELETE FROM devicetyperequests
        WHERE ID = ?;`,
        [id]
    )
    return deleted
  }
}
