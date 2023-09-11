import { Router } from 'express'

export const campusesRouter = Router()

campusesRouter.get('/', (req, res) => {
  res.json({ title: 'campuses' })
})
