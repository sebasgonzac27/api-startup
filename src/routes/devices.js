import { Router } from 'express'
import { DevicesController } from '../controllers/devices.js'

export const devicesRouter = Router()

// GET
devicesRouter.get('/', DevicesController.getAll)
devicesRouter.get('/:id', DevicesController.getById)

// POST
devicesRouter.post('/', DevicesController.create)

// PUT
devicesRouter.put('/:id', DevicesController.update)

// DELETE
devicesRouter.delete('/:id', DevicesController.delete)
