import { RequestsModel } from '../models/requests.js'
import { validateRequest, validatePartialRequest } from '../schemas/request.js'
import { error, success } from '../utils/responses.js'

export class RequestsController {
  static async getAll (req, res) {
    try {
      const [requests] = await RequestsModel.getAll()
      success(req, res, requests, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [request] = await RequestsModel.getById(id)
      success(req, res, request, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validatePartialRequest(req.body)
    if (result.success) {
      try {
        const added = await RequestsModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialRequest(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await RequestsModel.update(result.data, id)
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
      const deleted = await RequestsModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
