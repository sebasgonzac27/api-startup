import { Router } from 'express'
import { ProgramsController } from '../controllers/programs.js'

export const programsRouter = Router()

// GET
programsRouter.get('/', ProgramsController.getAll)
programsRouter.get('/:id', ProgramsController.getById)

// POST
programsRouter.post('/', ProgramsController.create)

// PUT
programsRouter.put('/:id', ProgramsController.update)

// DELETE
programsRouter.delete('/:id', ProgramsController.delete)
