import { Router } from 'express'
import { CampusesController } from '../controllers/campuses.js'

export const campusesRouter = Router()

// GET
campusesRouter.get('/', CampusesController.getAll)
campusesRouter.get('/:id', CampusesController.getById)

// POST
campusesRouter.post('/', CampusesController.create)

// PUT
campusesRouter.put('/:id', CampusesController.update)

// DELETE
campusesRouter.delete('/:id', CampusesController.delete)
