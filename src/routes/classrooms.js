import { Router } from 'express'

export const classroomsRouter = Router()

classroomsRouter.get('/', (req, res) => {
  res.json({ title: 'classrooms' })
})
