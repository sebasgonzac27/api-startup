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
}
