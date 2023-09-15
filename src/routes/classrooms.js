import { Router } from 'express'
import { ClassroomsController } from '../controllers/classrooms.js'

export const classroomsRouter = Router()

// GET
classroomsRouter.get('/', ClassroomsController.getAll)
classroomsRouter.get('/:id', ClassroomsController.getById)

// POST
classroomsRouter.post('/', ClassroomsController.create)

// PATCH
classroomsRouter.patch('/:id', ClassroomsController.update)

// DELETE
classroomsRouter.delete('/:id', ClassroomsController.delete)
