import { Router } from 'express'
import { DeviceTypeRequestsController } from '../controllers/deviceTypesRequests.js'

export const deviceTypeRequestsRouter = Router()

// GET
deviceTypeRequestsRouter.get('/', DeviceTypeRequestsController.getAll)
deviceTypeRequestsRouter.get('/:id', DeviceTypeRequestsController.getById)

// POST
deviceTypeRequestsRouter.post('/', DeviceTypeRequestsController.create)

// PUT
deviceTypeRequestsRouter.put('/:id', DeviceTypeRequestsController.update)

// DELETE
deviceTypeRequestsRouter.delete('/:id', DeviceTypeRequestsController.delete)
