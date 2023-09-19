import { ClassroomModel } from '../models/classrooms.js'
import { validateClassroom, validatePartialClassroom } from '../schemas/classroom.js'
import { error, success } from '../utils/responses.js'

export class ClassroomsController {
  static async getAll (req, res) {
    try {
      const [classrooms] = await ClassroomModel.getAll()
      success(req, res, classrooms, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [classroom] = await ClassroomModel.getById(id)
      success(req, res, classroom, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validateClassroom(req.body)
    if (result.success) {
      try {
        const added = await ClassroomModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialClassroom(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await ClassroomModel.update(result.data, id)
        success(req, res, updated, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async delete (req, res) {
    const { id } = req.params
    try {
      const deleted = await ClassroomModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
