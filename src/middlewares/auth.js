import jwt from 'jsonwebtoken'
import config from '../../config.js'
import { error } from '../utils/responses.js'

export const UserAuth = (req, res, next) => {
  const authorization = req.get('authorization')
  let token = ''

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  try {
    const decodedToken = jwt.verify(token, config.jwt.secret_key)
    if (!token || !decodedToken.ID) {
      throw Error
    }
    next()
  } catch (e) {
    error(req, res, 'Token missing or invalid', 401)
  }
}
