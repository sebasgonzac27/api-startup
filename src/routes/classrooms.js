import { Router } from 'express'
import { ClassroomsController } from '../controllers/classrooms.js'

export const classroomsRouter = Router()

// GET
classroomsRouter.get('/', ClassroomsController.getAll)
classroomsRouter.get('/:id', ClassroomsController.getById)

// POST
classroomsRouter.post('/', ClassroomsController.create)

// PUT
classroomsRouter.put('/:id', ClassroomsController.update)

// DELETE
classroomsRouter.delete('/:id', ClassroomsController.delete)
