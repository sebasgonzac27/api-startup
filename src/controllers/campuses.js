import { CampusesModel } from '../models/campuses.js'
import { validateCampus, validatePartialCampus } from '../schemas/campus.js'
import { error, success } from '../utils/responses.js'

export class CampusesController {
  static async getAll (req, res) {
    try {
      const [campuses] = await CampusesModel.getAll()
      success(req, res, campuses, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [campus] = await CampusesModel.getById(id)
      success(req, res, campus, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validateCampus(req.body)
    if (result.success) {
      try {
        const added = await CampusesModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialCampus(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await CampusesModel.update(result.data, id)
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
      const deleted = await CampusesModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
