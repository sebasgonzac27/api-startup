import { DevicesModel } from '../models/devices.js'
import { validateDevice, validatePartialDevice } from '../schemas/device.js'
import { error, success } from '../utils/responses.js'

export class DevicesController {
  static async getAll (req, res) {
    try {
      const [devices] = await DevicesModel.getAll()
      success(req, res, devices, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [device] = await DevicesModel.getById(id)
      success(req, res, device, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validateDevice(req.body)
    if (result.success) {
      try {
        const added = await DevicesModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialDevice(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await DevicesModel.update(result.data, id)
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
      const deleted = await DevicesModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
