import { Router } from 'express'
import { DeviceTypesController } from '../controllers/deviceTypes.js'
import { UserAuth } from '../middlewares/auth.js'

export const deviceTypesRouter = Router()

// GET
deviceTypesRouter.get('/', DeviceTypesController.getAll)
deviceTypesRouter.get('/:id', DeviceTypesController.getById)

// POST
deviceTypesRouter.post('/', UserAuth, DeviceTypesController.create)

// PUT
deviceTypesRouter.put('/:id', UserAuth, DeviceTypesController.update)

// DELETE
deviceTypesRouter.delete('/:id', UserAuth, DeviceTypesController.delete)
