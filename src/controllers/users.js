import { UserModel } from '../models/users.js'
import { validatePartialUser, validateUser } from '../schemas/user.js'
import { error, success } from '../utils/responses.js'

export class UsersController {
  static async getAll (req, res) {
    try {
      const [users] = await UserModel.getAll()
      success(req, res, users, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async getById (req, res) {
    const { id } = req.params
    try {
      const [user] = await UserModel.getById(id)
      success(req, res, user, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async create (req, res) {
    const result = validateUser(req.body)
    if (result.success) {
      try {
        const added = await UserModel.create(result.data)
        success(req, res, added, 200)
      } catch (e) {
        error(req, res, e.message, e.status)
      }
    } else {
      error(req, res, JSON.parse(result.error.message), 400)
    }
  }

  static async update (req, res) {
    const result = validatePartialUser(req.body)
    const { id } = req.params
    if (result.success) {
      try {
        const updated = await UserModel.update(result.data, id)
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
      const deleted = await UserModel.delete(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
