import { Router } from 'express'
import { UsersController } from '../controllers/users.js'

export const usersRouter = Router()

// GET
usersRouter.get('/', UsersController.getAll)
usersRouter.get('/:id', UsersController.getById)

// POST
usersRouter.post('/', UsersController.addUser)

// PATCH
usersRouter.patch('/:id', UsersController.updateUser)

// DELETE
usersRouter.delete('/:id', UsersController.deleteUser)
