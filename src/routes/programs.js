import { Router } from 'express'
import { ProgramsController } from '../controllers/programs.js'
import { UserAuth } from '../middlewares/auth.js'

export const programsRouter = Router()

// GET
programsRouter.get('/', ProgramsController.getAll)
programsRouter.get('/:id', ProgramsController.getById)

// POST
programsRouter.post('/', UserAuth, ProgramsController.create)

// PUT
programsRouter.put('/:id', UserAuth, ProgramsController.update)

// DELETE
programsRouter.delete('/:id', UserAuth, ProgramsController.delete)
