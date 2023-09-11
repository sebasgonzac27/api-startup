import express, { json } from 'express'
import { corsMiddleware } from './src/middlewares/cors.js'
import { usersRouter } from './src/routes/users.js'
import { campusesRouter } from './src/routes/campuses.js'
import { classroomsRouter } from './src/routes/classrooms.js'
import { programsRouter } from './src/routes/programs.js'

const app = express()

app.use(json())
app.use(corsMiddleware())
app.disable('x-powered-by')

app.get('/', (req, res) => {
  res.json(
    {
      title: 'API for Startup',
      endpoints: {
        users: '/users',
        campuses: '/campuses',
        classrooms: '/classrooms',
        programs: '/programs',
        devicetypes: '/devicetypes',
        devices: '/devices',
        requests: '/requests'
      }
    })
})

app.use('/users', usersRouter)
app.use('/campuses', campusesRouter)
app.use('/classrooms', classroomsRouter)
app.use('/programs', programsRouter)

const PORT = process.env.PORT ?? 1234

app.set('port', PORT)

app.listen(app.get('port'), () => {
  console.log(`Server listening on port http://localhost:${app.get('port')}`)
})
