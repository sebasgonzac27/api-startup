import { ProgramsModel } from '../models/programs.js'
import { validateProgram, validatePartialProgram } from '../schemas/program.js'
import { error, success } from '../utils/responses.js'

export class ProgramsController {
  static async getAll (req, res) {
    try {
      const [programs] = await ProgramsModel.getAll()
      success(req, res, programs, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [program] = await ProgramsModel.getById(id)
      success(req, res, program, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validateProgram(req.body)
    if (result.success) {
      try {
        const added = await ProgramsModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialProgram(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await ProgramsModel.update(result.data, id)
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
      const deleted = await ProgramsModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
