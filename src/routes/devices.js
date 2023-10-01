import { Router } from 'express'
import { DevicesController } from '../controllers/devices.js'
import { UserAuth } from '../middlewares/auth.js'

export const devicesRouter = Router()

// GET
devicesRouter.get('/', DevicesController.getAll)
devicesRouter.get('/:id', DevicesController.getById)

// POST
devicesRouter.post('/', UserAuth, DevicesController.create)

// PUT
devicesRouter.put('/:id', UserAuth, DevicesController.update)

// DELETE
devicesRouter.delete('/:id', UserAuth, DevicesController.delete)
