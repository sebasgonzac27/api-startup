import User from '../models/users.js';
import { createToken } from '../schemas/index.js';

// Función para crear un usuario nuevo o registrarse
export async function signUp(req, res) {
  const user = new User({
    FullName: req.body.FullName,
    Email: req.body.Email
  });

  try {
    await user.save();
    const token = createToken(user);
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send({ message: `Error al crear el usuario: ${err}` });
  }
}

// Función para iniciar sesión
export async function signIn(req, res) {
  try {
    const user = await User.findOne({ Email: req.body.Email });
    if (!user) {
      res.status(404).send({ message: 'No existe el usuario' });
      return;
    }

    res.status(200).send({
      message: 'Te has logeado correctamente',
      token: createToken(user)
    });
  } catch (err) {
    res.status(500).send({ message: err });
  }
}
