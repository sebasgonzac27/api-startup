import { Router } from 'express'
import { DeviceTypeRequestsController } from '../controllers/deviceTypesRequests.js'
import { UserAuth } from '../middlewares/auth.js'

export const deviceTypeRequestsRouter = Router()

// GET
deviceTypeRequestsRouter.get('/', DeviceTypeRequestsController.getAll)
deviceTypeRequestsRouter.get('/:id', DeviceTypeRequestsController.getById)

// POST
deviceTypeRequestsRouter.post('/', UserAuth, DeviceTypeRequestsController.create)

// PUT
deviceTypeRequestsRouter.put('/:id', UserAuth, DeviceTypeRequestsController.update)

// DELETE
deviceTypeRequestsRouter.delete('/:id', UserAuth, DeviceTypeRequestsController.delete)
