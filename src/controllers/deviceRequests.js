import { DeviceRequestsModel } from '../models/deviceRequests.js'
import { validateDeviceRequests, validatePartialDeviceRequests } from '../schemas/deviceRequests.js'
import { error, success } from '../utils/responses.js'

export class DeviceRequestsController {
  static async getAll (req, res) {
    try {
      const [devicerequests] = await DeviceRequestsModel.getAll()
      success(req, res, devicerequests, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [devicerequests] = await DeviceRequestsModel.getById(id)
      success(req, res, devicerequests, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validateDeviceRequests(req.body)
    if (result.success) {
      try {
        const added = await DeviceRequestsModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialDeviceRequests(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await DeviceRequestsModel.update(result.data, id)
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
      const deleted = await DeviceRequestsModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
