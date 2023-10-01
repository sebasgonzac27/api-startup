import { Router } from 'express'
import { CampusesController } from '../controllers/campuses.js'
import { UserAuth } from '../middlewares/auth.js'

export const campusesRouter = Router()

// GET
campusesRouter.get('/', CampusesController.getAll)
campusesRouter.get('/:id', CampusesController.getById)

// POST
campusesRouter.post('/', UserAuth, CampusesController.create)

// PUT
campusesRouter.put('/:id', UserAuth, CampusesController.update)

// DELETE
campusesRouter.delete('/:id', UserAuth, CampusesController.delete)
