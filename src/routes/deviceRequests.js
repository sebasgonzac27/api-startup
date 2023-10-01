import { Router } from 'express'
import { DeviceRequestsController } from '../controllers/deviceRequests.js'
import { UserAuth } from '../middlewares/auth.js'

export const deviceRequestsRouter = Router()

// GET
deviceRequestsRouter.get('/', DeviceRequestsController.getAll)
deviceRequestsRouter.get('/:id', DeviceRequestsController.getById)

// POST
deviceRequestsRouter.post('/', UserAuth, DeviceRequestsController.create)

// PUT
deviceRequestsRouter.put('/:id', UserAuth, DeviceRequestsController.update)

// DELETE
deviceRequestsRouter.delete('/:id', UserAuth, DeviceRequestsController.delete)
