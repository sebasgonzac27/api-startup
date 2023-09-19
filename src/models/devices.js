import database from '../database/mysql.js'

export class DevicesModel {
  static async getAll () {
    const devices = await database.query(
      'SELECT * FROM Devices ORDER BY ID;'
    )
    return devices
  }

  static async getById (id) {
    const device = await database.query(
      'SELECT * FROM Devices WHERE Device.ID = ?;',
      [id]
    )
    return device
  }

  static async create (data) {
    const { DeviceTypeID, InventoryNumber, IdentifierNumber, DeviceStatus } = data
    const created = await database.query(
        `INSERT INTO Devices
        (DeviceTypeID, InventoryNumber, IdentifierNumber, DeviceStatus)
        VALUES (?, ?, ?, ?);`,
        [DeviceTypeID, InventoryNumber, IdentifierNumber, DeviceStatus]
    )
    return created
  }

  static async update (data, id) {
    const { DeviceTypeID, InventoryNumber, IdentifierNumber, DeviceStatus } = data
    const updated = await database.query(
        `UPDATE Devices
        SET DeviceTypeID = ?, InventoryNumber = ?, IdentifierNumber = ?, DeviceStatus = ?
        WHERE ID = ?;`,
        [DeviceTypeID, InventoryNumber, IdentifierNumber, DeviceStatus, id]
    )
    return updated
  }

  static async delete (id) {
    const deleted = await database.query(
        `DELETE FROM Devices
        WHERE ID = ?;`,
        [id]
    )
    return deleted
  }
}
