import { Router } from 'express'
import { UsersController } from '../controllers/users.js'

export const usersRouter = Router()

// GET
usersRouter.get('/', UsersController.getAll)
usersRouter.get('/:id', UsersController.getById)

// POST
usersRouter.post('/', UsersController.create)

// PUT
usersRouter.put('/:id', UsersController.update)

// DELETE
usersRouter.delete('/:id', UsersController.delete)
