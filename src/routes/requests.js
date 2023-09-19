import { Router } from 'express'
import { RequestsController } from '../controllers/requests.js'

export const requestsRouter = Router()

// GET
requestsRouter.get('/', RequestsController.getAll)
requestsRouter.get('/:id', RequestsController.getById)

// POST
requestsRouter.post('/', RequestsController.create)

// PUT
requestsRouter.put('/:id', RequestsController.update)

// DELETE
requestsRouter.delete('/:id', RequestsController.delete)
