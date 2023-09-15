import { DeviceTypesModel } from '../models/deviceTypes.js'
import { validateDeviceType, validatePartialDeviceType } from '../schemas/deviceType.js'
import { error, success } from '../utils/responses.js'

export class DeviceTypesController {
  static async getAll (req, res) {
    try {
      const [deviceTypes] = await DeviceTypesModel.getAll()
      success(req, res, deviceTypes, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [deviceType] = await DeviceTypesModel.getById(id)
      success(req, res, deviceType, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validateDeviceType(req.body)
    if (result.success) {
      try {
        const added = await DeviceTypesModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialDeviceType(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await DeviceTypesModel.update(result.data, id)
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
      const deleted = await DeviceTypesModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
