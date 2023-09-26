import { UserModel } from '../models/users.js';
import { createToken } from '../schemas/token.js'; // Asegúrate de que la ruta es correcta
import bcrypt from 'bcrypt';

export class AuthController {
  
  static async signUp(req, res) {
    // Aquí probablemente quieras cifrar la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(req.body.Password, 12);
    
    const user = {
      FullName: req.body.FullName,
      Email: req.body.Email,
      Username: req.body.Username,
      Password: hashedPassword,
      Phone: req.body.Phone,
      Role: req.body.Role
    };

    try {
      const newUser = await UserModel.create(user);
      const token = createToken(newUser);
      res.status(201).send({ token });
    } catch (err) {
      res.status(500).send({ message: `Error al crear el usuario: ${err}` });
    }
  }

  static async signIn(req, res) {
    try {
      const user = await UserModel.getByEmail(req.body.Email);
      if (!user || !await bcrypt.compare(req.body.Password, user.Password)) {
        return res.status(401).send({ message: 'Email o contraseña incorrectos' });
      }

      const token = createToken(user);
      res.status(200).send({
        message: 'Te has logeado correctamente',
        token
      });
    } catch (err) {
      res.status(500).send({ message: err });
    }
  }
}
