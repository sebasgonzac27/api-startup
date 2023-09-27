import { DeviceTypeRequestsModel } from '../models/deviceTypeRequests.js'
import { validateDeviceTypeRequest, validatePartialDeviceTypeRequest } from '../schemas/deviceTypesRequests.js'
import { error, success } from '../utils/responses.js'

export class DeviceTypeRequestsController {
  static async getAll (req, res) {
    try {
      const [devicetyperequests] = await DeviceTypeRequestsModel.getAll()
      success(req, res, devicetyperequests, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [devicetyperequests] = await DeviceTypeRequestsModel.getById(id)
      success(req, res, devicetyperequests, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validateDeviceTypeRequest(req.body)
    if (result.success) {
      try {
        const added = await DeviceTypeRequestsModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialDeviceTypeRequest(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await DeviceTypeRequestsModel.update(result.data, id)
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
      const deleted = await DeviceTypeRequestsModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
