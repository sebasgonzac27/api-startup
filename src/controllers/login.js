import { LoginModel } from '../models/login.js'
import { success, error } from '../utils/responses.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import config from '../../config.js'

export class LoginController {
  static async find (req, res) {
    const { Email, Password } = req.body
    try {
      const [user] = await LoginModel.find(Email)
      const findedUser = user[0]
      const passwordCorrect = findedUser === null
        ? false
        : await bcrypt.compare(Password, findedUser.Password)
      if (!passwordCorrect) {
        throw Error
      }

      const token = jwt.sign(findedUser, config.jwt.secret_key)

      const resUser = {
        FullName: findedUser.FullName,
        Email: findedUser.Email,
        Role: findedUser.Role,
        token
      }
      success(req, res, resUser, 200)
    } catch (e) {
      error(req, res, 'Usuario o contraseña incorrectos', 401)
    }
  }
}
