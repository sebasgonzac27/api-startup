// tokenUtils.js
import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'yourDefaultSecretKey'; // Puedes cambiar 'yourDefaultSecretKey' a lo que quieras como clave por defecto.

export function createToken(data) {
  return jwt.sign(data, SECRET_KEY, { expiresIn: '1h' }); // El token expirará en 1 hora
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}
