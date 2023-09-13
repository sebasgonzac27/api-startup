import { UserModel } from '../models/users.js'
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

  static async addUser (req, res) {
    const data = req.body
    try {
      const added = await UserModel.addUser(data)
      success(req, res, added, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async updateUser (req, res) {
    const data = req.body
    const { id } = req.params
    try {
      const updated = await UserModel.updateUser(data, id)
      success(req, res, updated, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }

  static async deleteUser (req, res) {
    const { id } = req.params
    try {
      const deleted = await UserModel.deleteUser(id)
      success(req, res, deleted, 200)
    } catch (e) {
      error(req, res, e.message, e.status)
    }
  }
}
