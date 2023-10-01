import { Router } from 'express'
import { ClassroomsController } from '../controllers/classrooms.js'
import { UserAuth } from '../middlewares/auth.js'

export const classroomsRouter = Router()

// GET
classroomsRouter.get('/', ClassroomsController.getAll)
classroomsRouter.get('/:id', ClassroomsController.getById)

// POST
classroomsRouter.post('/', UserAuth, ClassroomsController.create)

// PUT
classroomsRouter.put('/:id', UserAuth, ClassroomsController.update)

// DELETE
classroomsRouter.delete('/:id', UserAuth, ClassroomsController.delete)
