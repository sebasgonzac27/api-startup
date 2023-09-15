import database from '../database/mysql.js'

export class ProgramsModel {
  static async getAll () {
    const programs = await database.query(
      'SELECT * FROM Programs ORDER BY ID;'
    )
    return programs
  }

  static async getById (id) {
    const program = await database.query(
        `SELECT *
        FROM Programs
        WHERE ID = ?;`,
        [id]
    )
    return program
  }

  static async create (data) {
    const { ID, ProgramName } = data
    const created = await database.query(
        `INSERT INTO Programs
        (ID, ProgramName)
        VALUES (?, ?);`,
        [ID, ProgramName]
    )
    return created
  }

  static async update (data, id) {
    const { ProgramName } = data
    const updated = await database.query(
        `UPDATE Programs
        SET ProgramName = ?
        WHERE ID = ?;`,
        [ProgramName, id]
    )
    return updated
  }

  static async delete (id) {
    const deleted = await database.query(
        `DELETE FROM Programs
        WHERE ID = ?;`,
        [id]
    )
    return deleted
  }
}
