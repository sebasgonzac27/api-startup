// schemas/token.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'tuSecretDefault';

export function createToken(user) {
  return jwt.sign({ id: user.ID }, SECRET_KEY, {
    expiresIn: 86400 // 24 horas
  });
}

export function verifyToken(token) {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (e) {
    return null;
  }
}
