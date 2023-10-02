import { Router } from 'express'
import { UsersController } from '../controllers/users.js'
import { UserAuth } from '../middlewares/auth.js'

export const usersRouter = Router()

// GET
usersRouter.get('/', UsersController.getAll)
usersRouter.get('/:id', UsersController.getById)

// POST
usersRouter.post('/', UsersController.create)

// PUT
usersRouter.put('/:id', UserAuth, UsersController.update)

// DELETE
usersRouter.delete('/:id', UserAuth, UsersController.delete)
