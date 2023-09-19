import { Router } from 'express'
import { DeviceTypesController } from '../controllers/deviceTypes.js'

export const deviceTypesRouter = Router()

// GET
deviceTypesRouter.get('/', DeviceTypesController.getAll)
deviceTypesRouter.get('/:id', DeviceTypesController.getById)

// POST
deviceTypesRouter.post('/', DeviceTypesController.create)

// PUT
deviceTypesRouter.put('/:id', DeviceTypesController.update)

// DELETE
deviceTypesRouter.delete('/:id', DeviceTypesController.delete)
