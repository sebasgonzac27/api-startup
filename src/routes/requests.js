import { Router } from 'express'
import { RequestsController } from '../controllers/requests.js'
import { UserAuth } from '../middlewares/auth.js'

export const requestsRouter = Router()

// GET
requestsRouter.get('/', RequestsController.getAll)
requestsRouter.get('/:id', RequestsController.getById)

// POST
requestsRouter.post('/', UserAuth, RequestsController.create)

// PUT
requestsRouter.put('/:id', UserAuth, RequestsController.update)

// DELETE
requestsRouter.delete('/:id', UserAuth, RequestsController.delete)
