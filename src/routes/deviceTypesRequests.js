import { Router } from 'express'
import { DeviceTypeRequestsController } from '../controllers/deviceTypesRequests.js'

export const deviceTypeRequestsController = Router()

// GET
deviceTypeRequestsController.get('/', DeviceTypeRequestsController.getAll)
deviceTypeRequestsController.get('/:id', DeviceTypeRequestsController.getById)

// POST
deviceTypeRequestsController.post('/', DeviceTypeRequestsController.create)

// PUT
deviceTypeRequestsController.put('/:id', DeviceTypeRequestsController.update)

// DELETE
deviceTypeRequestsController.delete('/:id', DeviceTypeRequestsController.delete)
