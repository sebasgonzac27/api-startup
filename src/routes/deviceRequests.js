import { Router } from 'express'
import { DeviceRequestsController } from '../controllers/deviceRequests.js'

export const deviceRequestsRouter = Router()

// GET
deviceRequestsRouter.get('/', DeviceRequestsController.getAll)
deviceRequestsRouter.get('/:id', DeviceRequestsController.getById)

// POST
deviceRequestsRouter.post('/', DeviceRequestsController.create)

// PUT
deviceRequestsRouter.put('/:id', DeviceRequestsController.update)

// DELETE
deviceRequestsRouter.delete('/:id', DeviceRequestsController.delete)
