import { Router } from 'express'
import { DeviceRequestsController } from '../controllers/deviceRequests.js'

export const deviceRequestsController = Router()

// GET
deviceRequestsController.get('/', DeviceRequestsController.getAll)
deviceRequestsController.get('/:id', DeviceRequestsController.getById)

// POST
deviceRequestsController.post('/', DeviceRequestsController.create)

// PUT
deviceRequestsController.put('/:id', DeviceRequestsController.update)

// DELETE
deviceRequestsController.delete('/:id', DeviceRequestsController.delete)
