// middlewares/auth.js
import { verifyToken } from '../schemas/token.js';

export function isAuthenticated(req, res, next) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(403).send({ message: 'No token provided.' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).send({ message: 'Invalid token.' });
  }

  req.userId = decoded.id;
  next();
}
