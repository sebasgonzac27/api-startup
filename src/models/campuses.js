import database from '../database/mysql.js'

export class CampusesModel {
  static async getAll () {
    const campuses = await database.query(
      'SELECT * FROM Campuses ORDER BY ID;'
    )
    return campuses
  }

  static async getById (id) {
    const campus = await database.query(
        `SELECT *
        FROM Campuses
        WHERE ID = ?;`,
        [id]
    )
    return campus
  }

  static async create (data) {
    const { CampusName } = data
    const created = await database.query(
        `INSERT INTO Campuses
        (CampusName)
        VALUES (?);`,
        [CampusName]
    )
    return created
  }

  static async update (data, id) {
    const { CampusName } = data
    const updated = await database.query(
        `UPDATE Campuses
        SET CampusName = ?
        WHERE ID = ?;`,
        [CampusName, id]
    )
    return updated
  }

  static async delete (id) {
    const deleted = await database.query(
        `DELETE FROM Campuses
        WHERE ID = ?;`,
        [id]
    )
    return deleted
  }
}
