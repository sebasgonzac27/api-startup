import database from '../database/mysql.js'

export class RequestsModel {
  static async getAll () {
    const requests = await database.query(
        `SELECT *
        FROM Requests
        ORDER BY ID;`
    )
    return requests
  }

  static async getById (id) {
    const request = await database.query(
        `SELECT *
        FROM Requests
        WHERE ID = ?;`,
        [id]
    )
    return request
  }

  static async create (data) {
    const RequestDate = new Date()
    const RequestStatus = 'Pending'
    const {
      StartTime,
      EndTime,
      ClassroomID,
      ActivityDescription,
      UserID,
      ProgramID
    } = data
    const created = await database.query(
        `INSERT INTO Requests
        (   RequestDate,
            StartTime,
            EndTime,
            ClassroomID,
            ActivityDescription,
            RequestStatus,
            UserID,
            ProgramID)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);`,
        [RequestDate, RequestStatus, StartTime, EndTime, ClassroomID, ActivityDescription, UserID, ProgramID]
    )
    return created
  }

  static async update (data, id) {
    const {
      BorrowDate,
      StartTime,
      EndTime,
      ClassroomID,
      ActivityDescription,
      RequestStatus,
      UserID,
      ProgramID,
      ApprovedBy,
      ClosedBy
    } = data
    const updated = await database.query(
        `UPDATE Requests
        SET BorrowDate = ?,
        StartTime = ?,
        EndTime = ?,
        ClassroomID = ?,
        ActivityDescription = ?,
        RequestStatus = ?,
        UserID = ?,
        ProgramID = ?,
        ApprovedBy = ?,
        ClosedBy = ?
        WHERE ID = ?;`,
        [BorrowDate,
          StartTime,
          EndTime,
          ClassroomID,
          ActivityDescription,
          RequestStatus,
          UserID,
          ProgramID,
          ApprovedBy,
          ClosedBy, id]
    )
    return updated
  }

  static async delete (id) {
    const deleted = await database.query(
        `DELETE FROM Requests
        WHERE ID = ?;`,
        [id]
    )
    return deleted
  }
}
