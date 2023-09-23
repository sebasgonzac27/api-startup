import  {decodeToken} from '../schemas/index.js';

export async function isAuth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorización' });
    }

    const token = req.headers.authorization.split(" ")[1];

    try {
        const response = await decodeToken(token);
        req.user = response;
        next();
    } catch (error) {
        res.status(error.status);
    }
}
