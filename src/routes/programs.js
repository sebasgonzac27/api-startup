import { Router } from 'express'

export const programsRouter = Router()

programsRouter.get('/', (req, res) => {
  res.json({ title: 'programs' })
})
